import React, { Component } from 'react'
import { InputRef } from './InputRef';

export class ParentRef extends Component {
    constructor(props) {
        super(props)
          
        this.inputRef=React.createRef();
        console.log(this.inputRef)
      }
      componentDidMount(){
        console.log(this.inputRef);
      }
      clickHandler=()=>{
        alert(`My name is ${this.inputRef.current.value}`)
      }
      onBlur= ()=>{
        this.inputRef.current.value= this.inputRef.current.value.toUpperCase();
      }
  render() {
    return (
      <>

        <InputRef ref={this.inputRef} onBlurHandle={this.onBlur}/>
        <button onClick={this.clickHandler}>Get Focus</button>
      </>
    )
  }
}

export default ParentRef