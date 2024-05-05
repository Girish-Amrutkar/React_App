import React, { Component } from 'react'

export default class CompLifeF extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      console.log("F Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("F getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log("F componentDidMount()");
    }

    shouldComponentUpdate(){
        console.log("F shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("F getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate(nextProps, nextState){
        console.log("F componentDidUpdate()");
        return null;
    }

    increment=()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
  render() {
    console.log("F render()");
    console.log(this.state.count);
    return (
      <div>
        <h1>Component F {this.state.count}</h1>
        <button onClick={this.increment}>{this.state.count}</button>
      </div>
    )
  }
}
