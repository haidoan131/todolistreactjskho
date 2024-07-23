import React,{useState} from 'react'

export default function Hook1() {
    const [student,setStudent]=useState({name:"",age:0})
  return (
    <div>
      <h1>em tên là {student.name} năm nay e {student.age}</h1>
      <form>
        <input type="text" placeholder="nhập tên " value={student.name} onChange={(e)=>setStudent({...student,name:e.target.value})} /><br/>
        <input type="number" placeholder="nhập tuổi" value={student.age} onChange={(e)=>setStudent({...student,age:e.target.value})} /><br/>
      </form>
    </div>
  )
}
