import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './About'
import { Contact } from './Contact'
import { Errorpage } from './Errorpage'
import { Home } from './Home'
import { More } from './More'

export const Parent2 = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/More' element={<More/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
