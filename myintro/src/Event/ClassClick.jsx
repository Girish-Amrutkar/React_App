import React, { Component } from 'react'

export default class ClassClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "१ मछली पानी मे गई"
      }
    }
    changeMessage(){
        this.setState({
            message:"छपाक"
        })
        console.log("मर गई");
        console.log(this);
    }
  render() {
    let {message} =this.state;
    return (
      <div>
        <h1>{message}</h1>
        {/* <button onclick="changeMessage()">Change</button>
        <button onClick="changeMessage()">Change</button> */}
        {/* <button onClick={}></button> */}
        <button onClick={this.changeMessage}>Click</button>
      </div>
    )
  }
}
