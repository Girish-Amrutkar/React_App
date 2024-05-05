import React, { Component } from 'react'

export default class ClickBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello Rohit"
        }
    }
    changeMessage=()=>{
        this.setState({
            message: "Bye Rohit"
        })
    }
  render() {
    let {message} = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={this.changeMessage.bind(this)}>Click Me</button>
      </div>
    )
  }
}
