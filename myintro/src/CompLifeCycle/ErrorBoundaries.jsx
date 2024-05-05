import React, { Component } from 'react'
import Img from "./loading.gif"

export class ErrorBoundaries extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }
    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }

    componentDidCatch(error, info){
        console.log(error);
        console.log(info);
    }
  render() {
    if (this.state.hasError) {
        return (
            <img src={Img} alt="" />
        )
    }else{
        return(
            this.props.children
        )
    }
  }
}

export default ErrorBoundaries