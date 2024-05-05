import React from 'react'

export const Props8 = (props) => {
  return (
    <div align="center">
        <img src={props.photo} />
        <h1>The Man!  The Myth!  The Legend!</h1>
        <iframe width="560" height="315" src={props.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
