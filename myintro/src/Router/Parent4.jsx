import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { About4 } from './About4'
import { Contact4 } from './Contact4'
import { Errorpage } from './Errorpage'
import { Home4 } from './Home4'
import { More4 } from './More4'
import './style.css'

export const Parent4 = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home4/>}/>
            <Route path='/about' element={<About4/>}/>
            <Route path='/contact' element={<Contact4/>}/>
            <Route path='/more' element={<More4/>}/>
            <Route path='*' element={<Errorpage/>}/>
        </Routes>
    </BrowserRouter>
  )
}
