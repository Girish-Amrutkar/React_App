import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export const Navbar5 = () => {
    return (
        <>
        <div>
            <div className="container d-flex justify-content-around">
                
                <NavLink className='btn btn-warning' to='/home'>Home</NavLink>
                <NavLink className='btn btn-warning' to='/about'>About</NavLink>
                <NavLink className='btn btn-warning' to='/contact'>Contact</NavLink>
                <NavLink className='btn btn-warning' to='/more'>More</NavLink>
                
            </div>
            
        </div>
        <Outlet />
        </>
    )
}

export default Navbar5;