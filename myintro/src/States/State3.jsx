import React, { Component } from 'react'

export default class State3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         user: this.props.user,
      }
    }
    changeUser(){
        this.setState({
            user: "Ganpatrao"
        })
    }
  render() {
    console.log(this.props.user);
    console.log(this.state.user);
    return (
      <div>
        <h1>User is {this.state.user}</h1>
        <button onClick={()=>{this.changeUser()}}>Change User</button>
      </div>
    )
  }
}
