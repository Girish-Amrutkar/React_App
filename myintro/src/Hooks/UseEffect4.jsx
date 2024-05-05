import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffect4 = () => {
    let [count, setCount] = useState(0);
    let [name, setName] = useState("")
    useEffect(()=>{
        document.title = count;
        console.log("Component update");
    },[count])
  return (
    <div>
        <input type="text" value={name} onChange={(e) =>setName(e.target.value) } name="" id="" />
        <h4>{count}</h4>
        <button onClick={()=>{setCount(count + 1)}}>Add</button>
    </div>
  )
}
