import React from 'react'
import { useState } from 'react'

export const UseState1 = () => {
    let [count, setCount] = useState(0)
    let increment = () =>{
        setCount(count +1)
    }
  return (
    <div>
        <button onClick={increment}>{count}</button>
    </div>
  )
}
