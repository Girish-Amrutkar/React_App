import React from 'react'
import { useState } from 'react'

export const UseState = () => {
    let [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
    </div>
  )
}
