import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Test from './Test'

const TaskList = () => {
  const taskss=useSelector(state=>state.taskslice.tasks)
  console.log(taskss)
  const [Index, setIndex] = useState(0)
  
    return (
    
    <div>
      <button onClick={()=>setIndex(0)}>ALL</button>
      <button onClick={()=>setIndex(1)}>Done</button>
      <button onClick={()=>setIndex(2)}>Undone</button>
      {Index===0? taskss.map(el=><Test  key={el.id} el={el} />) :Index===1 ? taskss.filter(el=>el.isdone===true).map(el=><Test  key={el.id} el={el} />):taskss.filter(el=>el.isdone===false).map(el=><Test  key={el.id} el={el} />)}
 </div>
    )
}
export default TaskList;
