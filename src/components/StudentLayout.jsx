import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar/Navbar'


const StudentLayout = () => {
  return (
    <>

    <Navbar/>
    <Outlet/>
    </>
  )
}

export default StudentLayout