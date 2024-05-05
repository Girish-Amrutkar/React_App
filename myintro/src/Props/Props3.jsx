import React, { Component } from 'react'
import Props4 from './Props4'

export default class Props3 extends Component {
  render() {
    return (
      <div>
        <Props4 name="Girish" eyeColor="Grey"/>
        <Props4 name="Rushi" eyeColor="Red"/>
        <Props4 name="Rohit" eyeColor="Green"/>
      </div>
    )
  }
}
