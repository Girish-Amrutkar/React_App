import React, { Component } from 'react'
import Memo1 from './Memo1'

export default class ParentMemo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "Gangadhar",  
        count: 0
      }
    }
    clickHandler=()=>{
        this.setState({
            name: "Shaktimaan"
        })
    }
    clickIncrement=()=>{
        this.setState({
            count: (this.state.count)+1
        })
    }
  render() {
    console.log("*******Parent MEMO***********");
    return (
      <>
        <Memo1 name1= {this.state.name} count1={this.state.count}/>
        <button onClick={this.clickHandler}>Change</button>
        <button onClick={this.clickIncrement}>Increment</button>
      </>
    )
  }
}
