import React, { Component } from 'react'

export default class Props4 extends Component {
  render() {
    return (
      <div>
        <h1>My Name is {this.props.name} and My Eye Color is {this.props.eyeColor}</h1>
      </div>
    )
  }
}
