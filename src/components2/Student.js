import React ,{useState}from 'react'
import {ListGroupItem,Button,Input} from "reactstrap"
export default function Student(props) {
    const {student,deletebyId,reChecked,reName}=props
    const [isEdit,setIsEdit]=useState(false)
    const [text,setText]=useState(student.name)
  return (
    <div>
         <ListGroupItem className="item">


       <div>
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={student.checked}  onClick={()=>reChecked(student.id)}/>
 
        {
            !isEdit?  <p onDoubleClick={()=>setIsEdit(true)} className={student.checked?"student-name active":"student-name"}  onClick={()=>reChecked(student.id)}>{student.name} </p> 
            :<Input value={text} onChange={(e)=>setText(e.target.value)}   onKeyDown={(e)=>{
                if(e.key==="Enter")
                {
                    setIsEdit(false)
                    reName(student.id,text)
                }

            }}

            
            />


        }



          
            </div>
            <Button onClick={()=>deletebyId(student.id)}><i className="fa-solid fa-close"></i></Button>
         </ListGroupItem>
    </div>
  )
}
