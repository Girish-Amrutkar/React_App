import React, { Component } from 'react'
import axios from 'axios'
import { ProfileData } from './ProfileData'

class GitData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         profile:[]
      }
    }

    componentDidMount(){
        axios.get("https://api.github.com/users").then((res)=>{
            console.log(res.data);
            this.setState({profile:res.data})
        })
    }
  render() {
    let {profile}= this.state;
    return (
      <div>
            <ProfileData profiles={profile}/>
      </div>
    )
  }
}

export default GitData