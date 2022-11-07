import React from 'react'
import { Routes,Route } from 'react-router-dom'
import CreateStudentComponent from './CreateStudentComponent'
import ListStudent from './ListStudent'

const AllRoutes = () => {
  return (
   <Routes>
    <Route path="/" element={<ListStudent/>}></Route>
          <Route path="/student" element={<ListStudent />}></Route>
          <Route path="/add_student/:id" element={<CreateStudentComponent />}></Route>
   </Routes>
  )
}

export default AllRoutes