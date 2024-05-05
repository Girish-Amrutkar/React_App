import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const UseEffData1 = () => {
    let [posts, setPost] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data);
            setPost(response.data)
        }).catch(()=>{
            alert("Data is not found!")
        })
    })
  return (
    <div>
        {
            posts.map((post)=>{
                return <li key={post.id}>{post.title}</li>
            })
        }
    </div>
  )
}

