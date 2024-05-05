import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About1 } from './About1'
import { Contact1 } from './Contact1'
import { Home2 } from './Home2'
import { Errorpage } from './Errorpage'

export const Parent3 = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home2/>} />
            <Route path='/About' element={<About1/>} />
            <Route path='/Contact' element={<Contact1/>} />
            <Route path="*" element={<Errorpage/>} />
        </Routes>
    </BrowserRouter>
  )
}
