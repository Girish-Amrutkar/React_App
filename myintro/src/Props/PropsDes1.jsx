import React, { Component } from 'react'
import PropsDes2 from './PropsDes2'

export default class PropsDes1 extends Component {
  render() {
    return (
      <>
        <PropsDes2 obj={{name:"Asif",age:24, email:"asifpinjari@gmail.com"}}/>
      </>
    )
  }
}
