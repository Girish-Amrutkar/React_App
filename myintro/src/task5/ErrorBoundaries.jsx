import React, { Component } from 'react'
import Img from './spinner.jpeg';
export default class ErrorBoundries extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    getDerivedStateFromError(error){
        return {
            hasError:true
        }
    }
  render() {
    if(this.state.hasError){
        return(
            <img src={Img} alt="" srcset="" />
        )
    }
    else{
        return(
           [ this.state.children]
        )
    }
  }
}