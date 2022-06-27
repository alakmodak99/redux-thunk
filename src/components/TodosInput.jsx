import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addTodoRequest, addTodoFailure, addTodoSuccess, getTodos} from '../redux/action'
const TodosInput = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const handleAdd =()=>{
        const payload ={
            title,
            status : false
        }
        setTitle("")
        dispatch(addTodoRequest())
        axios.post('/todos', payload)
        .then((res)=>dispatch(addTodoSuccess()))
        // .then(()=> getTodos(dispatch))
        .then(()=> dispatch(getTodos))
        .catch(err=>dispatch(addTodoFailure(err)))

    }
  return (
    <div>
        <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} spellCheck='true' />
        <button onClick={handleAdd}>Submit</button>
      
    </div>
  )
}

export default TodosInput
