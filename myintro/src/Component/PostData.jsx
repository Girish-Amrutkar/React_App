import React, { Component } from 'react'
import axios from 'axios'

class PostData extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        user: "",
        body: "",
        title: "" 
      }
    }

    changeHandle=(event)=>{
        this.setState({[event.target.name]:event.target.value})
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then((res)=>{
            console.log(res);
        }).catch(()=>{
            alert('Error')
        })
    }

    submitHandle=(event)=>{
        event.preventDefault()
        console.log(this.state);
    }
    render() {
        let {user,body,title} = this.state
        return (
            <>
                <form action="" onSubmit={this.submitHandle} align="center">
                    <div>
                        <label htmlFor="">User</label>
                        <input type="text" value={user} name="" id="" onChange={this.changeHandle}/>
                    </div>
                    <div>
                        <label htmlFor="">Body</label>
                        <input type="text" value={body} name="" id="" onChange={this.changeHandle}/>

                    </div>
                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" value={title} name="" id="" onChange={this.changeHandle}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                
            </>
        )
    }
}

export default PostData