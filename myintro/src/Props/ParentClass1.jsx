import React, { Component } from 'react'
import ChildClass1 from './ChildClass1'

export default class ParentClass1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent: "parent"
      }
      this.greetMessage = this.greetMessage.bind(this)
    }
    greetMessage(){
        alert(`HELLO ${this.state.parent}`)
    }
  render() {
    return (
      <>
        <ChildClass1 greetHandler = {this.greetMessage}/>
      </>
    )
  }
}
