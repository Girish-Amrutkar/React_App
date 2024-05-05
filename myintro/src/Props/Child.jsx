import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <>
        <h1>My Name is {this.props.human.name} and My Eye Color is {this.props.human.eyeColor}.</h1>
      </>
    )
  }
}
