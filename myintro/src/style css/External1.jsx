import React from 'react'
import './External.css'

export const External1 = (props) => {
    let className1= props.primary?"primary":"secondary"
  return (
    <div>
        <h1 className={`${className1} font-axle heading`}>Conditional Styling</h1>
    </div>
  )
}
