import React, { Component } from 'react'

export default class ClickBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello Dalla"
      }
    }
    changeMessage=()=>{
        this.setState({
            message: "Bye Dalla"
        })
    }
  render() {
    let {message} = this.state
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={()=>this.changeMessage()}>Click</button>
      </div>
    )
  }
}
