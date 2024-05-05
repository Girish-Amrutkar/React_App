import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'

export const Home4 = () => {
  return (
    <>
        <header>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/more'>More</NavLink>
                </li>
            </ul>
        </header>
    </>
  )
}
