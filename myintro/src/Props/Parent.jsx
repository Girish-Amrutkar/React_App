import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  render() {
    return (
      <>
        <Child human={{name:"Ashutosh", eyeColor:"Red"}} />
      </>
    )
  }
}
export default Parent;