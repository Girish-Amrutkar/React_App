import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffect1 = () => {
    let [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = count;
        console.log("hello");
    })
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count + 1)}>Add</button>
    </div>
  )
}
