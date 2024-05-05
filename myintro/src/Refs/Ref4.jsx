import React, { Component } from 'react'

export default class Ref4 extends Component {
    constructor(props) {
      super(props)
    
      this.createElement= React.createRef();
      this.state ={
        img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2023/model_chooser/aventador_ultimae_roadster_m.jpg"
      }
    
    }
    componentDidMount(){
        console.log(this.createElement);
    }
    clickHandler=()=>{
        this.createElement.current.style.height="200px"
        this.createElement.current.style.width = "200px"
        this.createElement.current.style.border="1px solid"
        this.createElement.current.style.backgroundImage = `url(${this.state.img})`
        this.createElement.current.style.backgroundPosition = "center"
        this.createElement.current.style.backgroundRepeat = "no-repeat"
        this.createElement.current.style.backgroundArrangement = ""

    }
  render() {
    return (
      <>
        <div className='box1' ref={this.createElement}></div>
        <button onClick={this.clickHandler}>Create</button>
      </>
    )
  }
}
