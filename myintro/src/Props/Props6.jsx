import React from 'react'

export const Props6 = (props) => {
    let {model,price,make,photo} = props.obj
  return (
    <div>
        {/* <h1>My name is {props.name}</h1> */}
        {/* <h1>Model is {props.obj.model} and price is {props.obj.price} and it is made in {props.obj.make}.</h1> */}
        <h1>Model is {model} and price is {price} and it is made in {make}.</h1>
        <img src={photo} width={200} height={300} alt="" />
    </div>
  )
}

