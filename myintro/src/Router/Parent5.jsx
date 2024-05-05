import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About5 } from './About5'
import { Contact5 } from './Contact5'
import { Errorpage } from './Errorpage'
import { Home5 } from './Home5'
import { More5 } from './More5'
import { Navbar5 } from './Navbar5'

export const Parent5 = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navbar5/>}>
                <Route path='/home' element={<Home5/>}/>
                <Route path='/about' element={<About5/>}/>
                <Route path='/contact' element={<Contact5/>}/>
                <Route path='/more' element={<More5/>}/>
            </Route>
            <Route path='*' element={<Errorpage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
