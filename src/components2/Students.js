import React ,{useState,useEffect}from 'react'
import {Container,ListGroup} from "reactstrap"
import Student from './Student'
import Add from './Add'
import Footer from './Footer'
export default function Students() {
    const [flag,setFlag]=useState("")
    const [checkAll,setCheckAll]=useState(false)
    const [student,setStudent]=useState(
        [
        {
            id:1,
            name:"tho",
            age:12,
            checked:false
        },
        {
            id:2,
            name:"meo",
            age:12,
            checked:false
        },
        {
            id:3,
            name:"ga",
            age:12,
            checked:false
        },
        {
            id:4,
            name:"vit",
            age:12,
            checked:false
        }

        ,
        {
            id:5,
            name:"cho",
            age:12,
            checked:false
        }
        ]
    )

    //giúp load 1 lần
    useEffect(()=>{
        //kiểm tra có lưu trong local thì lưu update lại k gán cứng
        if(localStorage.getItem("list")){
            setStudent(JSON.parse(localStorage.getItem("list")))
        }
    },[])







   const deletebyId=(id)=>{
        const newlist=student.filter(stu=>stu.id!==id)
        setStudent(newlist)
        localStorage.setItem("list",JSON.stringify(newlist))
   }

   const reChecked=(id)=>{
        const newMap=student.map ((stu=>stu.id===id?{...stu,checked:!stu.checked}:stu))
        setStudent(newMap)
        localStorage.setItem("list",JSON.stringify(newMap))
   }

   const addNew=(name)=>{

    let idmax=student.reduce((max_value,student)=>Math.max(max_value,student.id),-Infinity)
        const newlist=[...student,{id:student.length===0?1:idmax+1,name:name,checked:false}]
        setStudent(newlist)
        localStorage.setItem("list",JSON.stringify(newlist))
 
 
    }

   const rename=(id,name)=>{
        let newList=student.map(stu=>stu.id===id?{...stu,name:name}:stu)
        setStudent(newList)
        localStorage.setItem("list",JSON.stringify(newList))
    }


    const filterStudent=(list,flag)=>{
        if(flag==="CHECK"){
            console.log("aaaa")
            return list.filter(stud=>stud.checked)
        }
        else if(flag==="NOCHECK"){
            return list.filter(stud=>!stud.checked)
        }
        else if(flag==="DELALL"){
            
          setStudent(student.filter(stu=>stu.checked===false))
          localStorage.setItem("list",JSON.stringify(student.filter(stu=>stu.checked===false)))
            setFlag("")
          

        }
        else if(flag==="CHECKALL"){
            setStudent(list.map(stu=>({...stu,checked:!checkAll})))
            localStorage.setItem("list",JSON.stringify(list.map(stu=>({...stu,checked:!checkAll}))))
            setCheckAll(!checkAll)
            setFlag("")
        }
        return list;
    }

  return (
    <div>

        <Container className="w-50 p-5 my-5">
        <h1 className="text-center">Student List</h1>   
        <Add addNew={addNew}/>
        <ListGroup>
            {
                filterStudent(student,flag).map((stu,index)=>(<Student reName={rename} key={index} student={stu}  deletebyId={deletebyId} reChecked={reChecked}/>))

            }

        </ListGroup>    

          <Footer setFlag={setFlag} checkAll={checkAll} setCheckAll={setCheckAll} />  

        </Container>
      
    </div>
  )
}
