import React, { Component } from 'react'
import { Login } from './Login'
import { Reg } from './Reg'
import "./App.css"

export default class Condi3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogIn : true
      }
    }
  render() {
    return (
      <>
        {this.state.isLogIn?<Login/>:<Reg/>}
        {/* {this.state.isLogIn && <Login/>} */}
      </>
    )
  }
}
