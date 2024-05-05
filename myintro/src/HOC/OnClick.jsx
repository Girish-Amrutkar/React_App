import React, { Component } from 'react'
import UpdateComponent from './HigherOrdComp'

export class OnClick extends Component {
  render() {
    const {name, count1, incrementCount1}=this.props;
    return (
      <>
            <button onClick={incrementCount1}> {name} {count1}</button>
      </>
    )
  }
}

export default UpdateComponent(OnClick)