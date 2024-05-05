import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffData3 = () => {
    let [count, setCount] = useState(0)
    const tick = () =>{setCount(count + 1)}
    useEffect(()=>{
        let interval = setTimeout(tick, 1000)
        return ()=>{clearInterval(interval)}
    },[count])
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}
