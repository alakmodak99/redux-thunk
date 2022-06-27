import axios from 'axios'
import * as types from './action-types'

//action Object craetors

export const getTodoRequest = ()=>{
    return {
        type: types.GET_TODO_REQUEST
    }
}
export const getTodoSuccess = (payload)=>{
    return {
        type: types.GET_TODO_SUCCESS,
        payload
    }
}
export const getTodoFailure = ()=>{
    return {
        type: types.GET_TODO_FAILURE
    }
}
export const addTodoRequest = ()=>{
    return {
        type: types.ADD_TODO_REQUEST
    }
}
export const addTodoSuccess = (payload)=>{
    return {
        type: types.ADD_TODO_SUCCESS,
        payload
    }
}
export const addTodoFailure = ()=>{
    return {
        type: types.ADD_TODO_FAILURE
    }
}
export function getTodos(dispatch){
    dispatch(getTodoRequest())
    axios.get('/todos')
    .then(res=>dispatch(getTodoSuccess(res.data)))
    .catch(err=> dispatch(getTodoFailure()))
    
}