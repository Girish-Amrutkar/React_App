import React, { Component } from 'react'

export default class State4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,

      }
    }
    changeCount(){
        this.setState({
            count: this.state.count+1,
        })
    }
  render() {
    let {count}= this.state
    return (
      <div>
        <h1>{this.state.count} मछली पानी मे गई ...   छपाक </h1>
        <button onClick={()=>{this.changeCount()}}>Increment Count</button>
      </div>
    )
  }
}
