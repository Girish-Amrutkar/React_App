import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Spinner from './spinner1.gif'

export const UseReduce6 = () => {
    let[loading,setloading] = useState(true)
    let[post,setPost] = useState({})
    let[error,setError]= useState("")

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
            setloading(false)
            setError("")
            setPost(res.data)
        }).catch(()=>{
            setloading(false)
            setError("Something went wrong")
            setPost({})
        })
    })
  return (
    <div>
        {loading?<img src={Spinner}/>:post.title}
        {error?error:null}
    </div>
  )
}
