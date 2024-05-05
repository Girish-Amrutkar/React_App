import React, { Component } from 'react'

class Props1 extends Component {
  render() {
    let name = "Rohit";
    let obj ={
        name : "Girish",
        age : 24,
        email : "girishamrutkar6@gmail.com"
    }
    return (
        <React.StrictMode>
            <h1>My Name is {name}</h1>
            <h1>My Name is {obj.name}, My Age is {obj.age} and My Email ID is {obj.email}</h1>
        </React.StrictMode>
    )
  }
}
export default Props1;