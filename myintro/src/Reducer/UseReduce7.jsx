import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import axios from 'axios'
import Spinner from './spinner1.gif'

let initialState = {
  post: {},
  error: "",
  loading: true
}

let reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, post: action.payload, error: "" }

    case "FETCH_ERROR":
      return { loading: false, error: "Something went wrong..." }
    default:
      return state
  }
}
export const UseReduce7 = () => {
  let [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      dispatch({ type: "FETCH_SUCCESS", payload: res.data })
    }).catch(error => {
      dispatch({ type: "FETCH_ERROR" })
    })
  }, [])
  return (
    <div>
      {state.loading ? <img src={Spinner} height={100} width={100}/> : state.post.title}
      {state.error ? state.error : null}
    </div>
  )
}
