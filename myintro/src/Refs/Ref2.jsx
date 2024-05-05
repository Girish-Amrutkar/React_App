import React, { Component } from 'react'

export default class Ref2 extends Component {
    constructor(props) {
      super(props)

      this.inputRef1 = React.createRef();
      this.inputRef2 = React.createRef();

    
    }
    componentDidMount(){
        console.log(this.inputRef1);
        console.log(this.inputRef2);
    }
    clickHandler=()=>{
        if (this.inputRef1.current.value === "girish@gmail.com" && this.inputRef2.current.value === "Girish@1234") {
            alert(`Your mail id is ${this.inputRef1.current.value} and Password is ${this.inputRef2.current.value}`)
        }else{
            alert(`Invalid Credentials`)
        }
    }
  render() {
    return (
      <>
        <input type="email" className='inp1' name="" ref={this.inputRef1} id="" required/>
        <br />
        <input type="password" className='inp2' name="" ref={this.inputRef2} id="" required/>
        <br />
        <button onClick={this.clickHandler}>Click Here</button>
      </>
    )
  }
}
