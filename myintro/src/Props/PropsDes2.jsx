import React, { Component } from 'react'

export default class PropsDes2 extends Component {
  render() {
    const {name,age,email}=this.props.obj
    return (
      <>
        <h1>My Name is {name} and Age is {age} and Email is {email}</h1>
      </>
    )
  }
}
