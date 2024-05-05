import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Parent = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1 className='text-center'>Welcome to Home Page</h1>}/>
            <Route path='/About' element={<h1 className='text-center'>Welcome to About Page</h1>}/>
            <Route path='/Contact' element={<h1 className='text-center'>Welcome to Contact Page</h1>}/>
        </Routes>
    </BrowserRouter>
  )
}
