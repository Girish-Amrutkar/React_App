import React, { Component } from 'react'

export default class State2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Subscribe Here !!!"
      }
    }
    changeHandler(){
        this.setState({
            message: "Thank You For Subscribing...!!!"
        })
    }
  render() {
    console.log(this.state.message);
    return (
      <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>{this.changeHandler()}} >Click Here to Subscribe</button>
      </div>
    )
  }
}
