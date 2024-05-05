import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffData4 = () => {
    let [post, setPost] = useState({})
    let [id, setId] = useState(1)
    let [idClickbtn, setIdClickbtn] = useState(1)

    let handle = () => {
        setIdClickbtn(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`
        ).then((resp) => {
            console.log(resp.data);
            setPost(resp.data)
        }).catch(()=>{'Error'})
    },[idClickbtn])
    return (
        <div>
            <input type="text" value={id} onChange={(e)=>{setId(e.target.value)}} />
            <button onClick={handle}>Print Data</button>
            <h3>{post.title}</h3>
        </div>
    )
}
