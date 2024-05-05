import React from 'react'
import { useState } from 'react'

export const UseState2 = () => {
    let initialValue = 0
    let [count, setCount] = useState(initialValue)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(initialValue)}>Reset</button>
    </div>
  )
}
