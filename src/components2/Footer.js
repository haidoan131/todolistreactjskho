import React from 'react'
import {Button} from "reactstrap"
export default function Footer(props) {
    const {setFlag,checkAll}=props
  return (
    <div className="my-3">

        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={checkAll} onChange={()=>setFlag("CHECKALL")} />
        <Button className="btn-success mx-1" onClick={()=>setFlag("CHECK")}>filter check</Button>
        <Button className="btn-success mx-1" onClick={()=>setFlag("NOCHECK")}>filter no check</Button>
        <Button className="btn-success mx-1" onClick={()=>setFlag("")}>clear check</Button>
        <Button className="btn-success mx-1" onClick={()=>setFlag("DELALL")}>delete  all</Button>


    </div>
  )
}
