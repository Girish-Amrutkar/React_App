import React from 'react'

export const DefProps1 = (props) => {
  return (
    <>
        <h1>My Name is {props.name} and Age is {props.age}</h1>
    </>
  )
}
DefProps1.defaultProps = {
    name: "Rushya",
    age: 23
}
