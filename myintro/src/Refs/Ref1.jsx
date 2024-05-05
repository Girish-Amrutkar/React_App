import React, { Component } from 'react'

export default class Ref1 extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      console.log(this.inputRef);

    }
    componentDidMount(){
        console.log(this.inputRef);
        // console.log(this.inputRef.current);
        // console.log(this.inputRef.current.className);
        this.inputRef.current.focus();
    }
    clickHandle =()=>{
        alert(`${this.inputRef.current.value}`)
    }
  render() {
    return (
      <React.StrictMode>
            <input type="text" className='inp1' name="" ref={this.inputRef} id="" />
            <button onClick={this.clickHandle}>Click Here</button>
      </React.StrictMode>
    )
  }
}
