import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

export default class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Girish"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "Girish"
            })
        },2000)
    }
  render() {
    console.log("******Parent Comp*********");
    return (
      <div>
        <h1>Parent Component</h1>
        <RegComp name1= {this.props.name1}/>
        <PureComp/>
      </div>
    )
  }
}
