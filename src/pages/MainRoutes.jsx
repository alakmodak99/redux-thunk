import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Todos from '../components/Todos'
import TodosInput from '../components/TodosInput'

const MainRoutes = () => {
  return (
 <Routes>
    <Route path='/' element={<Todos/>}/>
    <Route path='/:id' element={<TodosInput/>}/>
 </Routes>
  )
}

export default MainRoutes
