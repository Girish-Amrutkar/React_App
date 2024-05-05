import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffData2 = () => {
    const [post, setPost] = useState([])
    const [id, setId] = useState(1)
    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`).then((resp) => {
            console.log(resp.data);
            setPost(resp.data)
        }).catch(() => { console.log('Error'); })
    }, [id])
    return (
        <>
            <input type="text" value={id} onChange={(e) => { setId(e.target.value) }} />
            <h4>{post.body}</h4>
            <h3>{post.title}</h3>
        </>
    )
}
