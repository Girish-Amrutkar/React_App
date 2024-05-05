import React, { Component } from 'react'

export default class Ref3 extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef1 = React.createRef();
      this.callBRef = null;
      this.setCallBRef = (element)=>{
        this.callBRef = element;
      }
      console.log(this.callBRef);
    }
    componentDidMount() {
        console.log(this.callBRef);
    }
    clickHandler= ()=>{
        if (this.callBRef) {
            alert(`${this.callBRef.value}`);
          } else {
            alert('Invalid Input');
        }
    }
  render() {
    return (
      <>
        <input type="text" name="" ref={this.setCallBRef} id="" />
        <button onClick={this.clickHandler}>Click Here</button>
      </>
    )
  }
}
