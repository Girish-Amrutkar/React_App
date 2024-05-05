import React, { Component } from 'react'
import CompLifeD from './CompLifeD';

export default class CompLifeC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0,
      }

      console.log("Component Life C Constructor()");
    }

    static getDerivedStateFromProps(props, state){
        console.log("CompLifeC getDerivedStateFromProps()");
        return null;
    }

    incrementCount=()=>{
        this.setState({
        count: this.state.count +=1
    })
    }

    componentDidMount(){
        console.log("CompLifeC componentDidMount()");
    }
  render() {
    console.log("CompLifeC render()");
    return (
      <>
        <h1>Component C</h1>
        <CompLifeD/>
      </>
    )
  }
}
