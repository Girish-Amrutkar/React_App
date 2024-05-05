import React, { Component } from 'react'

export default class Ref5 extends Component {
    constructor(props) {
      super(props)

    this.boxRef = React.createRef();
    }
    componentDidMount(){
        console.log(this.boxRef);
    }
    clickHandler=()=>{
        let obj = this.boxRef.current;
        obj.style.height = "150px";
        obj.style.width= "150px";
        obj.style.border = "1px solid";
        obj.style.backgroundColor = "black";
    }
  render() {
    return (
      <React.StrictMode>
        <div ref={this.boxRef}></div>
        <button onClick={this.clickHandler}>Change</button>
      </React.StrictMode>
    )
  }
}
