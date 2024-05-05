import React, { Component } from 'react'

export default class CompLifeD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }

      console.log("Component Life D Constructor()");
    }

    static getDerivedStateFromProps(props, state){
        console.log("CompLifeD getDerivedStateFromProps()");
        return null;
    }

    incrementCount=()=>{
        this.setState({
        count: this.state.count +1
    })
    }

    componentDidMount(){
        console.log("CompLifeD componentDidMount()");
    }
  render() {
    console.log("CompLifeD render()");
    console.log(this.state.count);
    return (
      <>
        <h1>Component D</h1>
        <button onClick={this.incrementCount}>Count{this.state.count}</button>
      </>
    )
  }
}
