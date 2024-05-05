import React from 'react'
import { Link } from 'react-router-dom'

export const About1 = () => {
  return (
    <>
        <header>
            <ul>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/About'}>About</Link>
                </li>
                <li>
                    <Link to={'/Contact'}>Contact</Link>
                </li>
            </ul>
        </header>
        <section><h1>About Page</h1></section>
    </>
  )
}
