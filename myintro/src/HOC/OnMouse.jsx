import React, { Component } from 'react'
import UpdateComponent from './HigherOrdComp'

export class OnMouse extends Component {
  render() {
    const {name,count1,incrementCount1}= this.props
    return (
      <div>
        <h1 onMouseOver={incrementCount1}>{name} {count1}</h1>
      </div>
    )
  }
}

export default UpdateComponent(OnMouse)