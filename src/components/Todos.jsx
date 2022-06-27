import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getTodoRequest, getTodoFailure, getTodoSuccess, getTodos} from '../redux/action'
import TodosInput from './TodosInput'
const Todos = () => {
    const dispatch =useDispatch()
    const todos =useSelector(store=>store.todos)
/*    const getTodos=()=>{
        dispatch(getTodoRequest())
        axios.get('/todos')
        .then(res=>dispatch(getTodoSuccess(res.data)))
        .catch(err=> dispatch(getTodoFailure()))
        
    } */

    useEffect(()=>{
        if(todos?.length ===0){
            // getTodos(dispatch)
            dispatch(getTodos)
        }
       
    },[])
    console.log(todos)
  return (
    <div>
        <h2>Todos</h2>
        {/* <TodosInput getTodos= {getTodos}/> */}
        <TodosInput/>
        {todos?.map((e,i)=>(
            <div key={e.id}>
            <div>Title : {e.title}</div>
            <div>Status : {e.status? "Done" : "Not done"}</div>
            </div>
        ))}
      
    </div>
  )
}

export default Todos
