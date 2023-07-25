import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { edittask } from '../Slices/Taskslice'
const Test = ({el}) => {
    const [showEdit, setshowEdit] = useState(false)
    const [newdisc, setnewdesc] = useState("");
    const dispatch=useDispatch()
  return (
    <div>
      <h1 className={el.isdone? "done":null}>{el.description}</h1>
      <button onClick={()=>{setshowEdit(!showEdit); dispatch(edittask({id: el.id, task:{...el,description:newdisc}} ))
 }}>{showEdit ?"confirm" :"Edit"}</button> 
      {showEdit? <input type="text" name="" id="" onChange={(e)=>setnewdesc(e.target.value)}/> :null}
    </div>
  )
}


export default Test
