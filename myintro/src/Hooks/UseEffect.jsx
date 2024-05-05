import React, { Component } from 'react'

export class UseEffect extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }
    }
    componentDidMount(){
        console.log("ComponentDidMount()");
        document.title = this.state.count
    }
    componentDidUpdate(prevProps, prevState){
        console.log("ComponentDidUpdate()");
        document.title = this.state.count
    }
  render() {
    return (
      <div>
        <h3>{this.state.count}</h3>
        <button onClick={()=>{this.setState({count:this.state.count + 1})}}>Add</button>
      </div>
    )
  }
}

export default UseEffect