import React from 'react'
import { useState } from 'react'
import { UseEffect6 } from './UseEffect6'

export const UseEffect7 = () => {
    const [display, setDisplay]= useState(true)
  return (
    <div>
        <button onClick={()=>{setDisplay(!display)}}>Toggle Display</button>
        {
            display && <UseEffect6/>
        }
    </div>
  )
}
