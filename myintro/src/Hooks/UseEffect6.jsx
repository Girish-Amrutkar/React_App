import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffect6 = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const logPosition=(e)=>{
        setX(e.clientX)
        setY(e.clientY)
        console.log("mouse move");
    }
    useEffect(()=>{
        console.log("useEffect()");
        window.addEventListener("mousemove", logPosition)

        return ()=>{
            window.removeEventListener("mousemove",logPosition)
        }
    },[])

  return (
    <div>
        X:{x}
        Y:{y}
    </div>
  )
}
