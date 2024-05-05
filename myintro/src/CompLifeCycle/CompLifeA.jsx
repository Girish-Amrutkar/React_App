import React, { Component } from 'react'

export default class CompLifeA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }

      console.log("Component Life A Constructor()");
    }

    static getDerivedStateFromProps(props, state){
        console.log("CompLifeA getDerivedStateFromProps()");
        return null;
    }

    componentDidMount(){
        console.log("CompLifeA componentDidMount()");
    }
  render() {
    console.log("CompLifeA render()");
    return (
      <>
        <h1>Component A</h1>
      </>
    )
  }
}
