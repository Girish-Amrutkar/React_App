import React, { Component } from 'react'

export default class CompLifeB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }

      console.log("Component Life B Constructor()");
    }

    static getDerivedStateFromProps(props, state){
        console.log("CompLifeB getDerivedStateFromProps()");
        return null;
    }

    incrementCount=()=>{
        this.setState({
        count: this.state.count +=1
    })
    }

    componentDidMount(){
        console.log("CompLifeB componentDidMount()");
    }
  render() {
    console.log("CompLifeB render()");
    return (
      <>
        <h1>Component B</h1>
        <button onClick={this.incrementCount}>Count{this.state.count}</button>
      </>
    )
  }
}
