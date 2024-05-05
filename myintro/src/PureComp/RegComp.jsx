import React, { Component } from 'react'

export default class RegComp extends Component {
  render() {
    console.log("******Regular Comp*********");
    return (
      <div>
        <h1>Regular Component {this.props.name1}</h1>
      </div>
    )
  }
}
