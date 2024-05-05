import React, { Component } from 'react'
import Data from './Data'
import Spinner from './Spinner'

export default class extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isAvailable:false,
      }
    }
  render() {
    if(this.state.isAvailable){
    return (
         <div>
           <Data></Data>
         </div>
    )
  }else{
    return(
         <>
         <Spinner></Spinner>
         </>
    )
  }
}
}