import React, { Component } from 'react'

export default class ClickBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello Rushya"
      }
      
    }
  render() {
    return (
      <div>
        <h1>{message}</h1>
        <button ></button>
      </div>
    )
  }
}
