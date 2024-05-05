import React, { Component } from 'react'

export default class HOC2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    incrementCount=()=>{
        this.setState((prevState)=>{
            return {count:prevState.count+1}
        })
    }
  render() {
    return (
      <div>
            <h1 onMouseOver={this.incrementCount}>Heading Count is {this.state.count}</h1>
      </div>
    )
  }
}
