import React, {useState} from 'react'
import {useDispatch} from'react-redux'
import {addtask} from '../Slices/Taskslice'

const Add = () => {
    const [newtask, setnewtask] = useState(
        {
            id:0,
            Description:"",
            isdone:false
        })
    
    const dispatch=useDispatch()
  return (
    <div>
      <input type="text" name="" id="" onChange={(e)=>setnewtask({...newtask,Description:e.target.value,id:Math.random()*100})} />
      <button onClick={()=>dispatch(addtask(newtask))}>ADD</button>
    </div>
  )
}

export default Add
