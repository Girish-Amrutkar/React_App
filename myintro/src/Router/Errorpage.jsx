import React from 'react'
import Spinner from './spinner1.gif'

export const Errorpage = () => {
  return (
    <div >
        <h1 className='text-center text-danger'>Oops...! Page not Found</h1>
        <img src={Spinner} alt="" />
    </div>
  )
}
