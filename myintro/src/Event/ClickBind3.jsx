import React, { Component } from 'react'

export default class ClickBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello Rushya"
        }
        this.changeMessage = this.changeMessage.bind(this)
    }
    changeMessage=()=>{
        this.setState({
            message: "Bye Rushya"
        })
    }
  render() {
    let {message} = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={this.changeMessage}>Click Me</button>
      </div>
    )
  }
}
