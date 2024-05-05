import React, { Component } from 'react'

export default class CompLifeE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      console.log("CompLifeE Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("CompLifeE getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("CompLifeE componentDidMount()");
    }

    increment=()=>{
        this.setState({count: this.state.count +1})
    }

  render() {
    console.log("render()");
    return (
      <div>
        <h1>Component E</h1>
        <button onClick={this.increment}> {this.state.count}</button>
      </div>
    )
  }
}
