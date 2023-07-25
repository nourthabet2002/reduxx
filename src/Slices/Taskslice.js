import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tasks: [
    {
        id:Math.random()*100,
        description:"learn HTML",
        isdone:true
    },
    {
        id:Math.random()*100,
        description:"learn css",
        isdone:false

    },
    {
        id:Math.random()*100,
        description:"learn js",
        isdone:true

    },
  ]
}

export const Taskslice = createSlice({
  name: 'taskslice',
  initialState,
  reducers: {
    addtask:(state,action)=>{
        state.tasks=[...state.tasks,action.payload]
    },
    edittask:(state,action)=>{
      const taskIndex=state.tasks.findIndex(el=>el.id===action.payload.id)
      state.tasks[taskIndex]=action.payload.task
    }
   },
})

// Action creators are generated for each case reducer function
export const {  addtask,edittask} = Taskslice.actions

export default Taskslice.reducer