import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffect2 = () => {
    let [count, setCount] = useState(0)

    console.log("bye");
    let add =()=>{
        setCount(count + 1)
        document.title = count
    }
  return (
    <div>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count + 1)}>Add</button>
    </div>
  )
}
