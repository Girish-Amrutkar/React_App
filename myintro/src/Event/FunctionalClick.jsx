import React from 'react'

export const FunctionalClick = () => {
    function getPrint(params) {
        console.log("Clicked!!!");
    }
  return (
    <div>
        <button onClick={getPrint}>Click</button>
    </div>
  )
}
