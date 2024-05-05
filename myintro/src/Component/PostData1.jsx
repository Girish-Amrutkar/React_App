import axios from 'axios'
import React, { Component } from 'react'

class PostData1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            empId: '',
            contact: '',
            emailId: ''
        }
    }
    onChangeHandle = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    onSubmitHandle = (event) => {
        event.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state).then((res) => {
            console.log(res);
        }).catch(() => {
            alert("Data not Posted")
        })
    }

    getHandle = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log(res);
        }).catch(() => {
            alert("Unable to get the Data")
        })
    }

    updateHandle = () => {
        this.setState(
            {
                userName: 'Ashutosh',
                empId: 'TCS2201',
                contact: '8056454456',
                emailId: 'ashutosh@gmail.com'
            }
        )
        axios.put("https://jsonplaceholder.typicode.com/posts/1", this.state).then((res) => {
            console.log(res);
        }).catch(() => {
            alert("Unable to update the Data.")
        })
    }

    deleteHandle = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1", this.state).then((res) => {
            console.log(res);
        }).catch(() => {
            alert("Unable to delete the Data.")
        })
    }
    render() {
        const { userName, empId, contact, emailId } = this.state;
        return (
            <React.StrictMode>
                <form action="" onSubmit={this.onSubmitHandle}>
                    <div><input onChange={this.onChangeHandle} placeholder="Name" name='userName' value={userName} type="text" /></div>
                    <div><input onChange={this.onChangeHandle} placeholder="ID" name='empId' value={empId} type="text" /></div>
                    <div><input onChange={this.onChangeHandle} placeholder="Contact" name='contact' value={contact} type="tel" /></div>
                    <div><input onChange={this.onChangeHandle} placeholder="Email" name='emailId' value={emailId} type="email" /></div>
                    <button>Submit</button>
                    <button onClick={this.getHandle}>Get</button>
                    <button onClick={this.updateHandle}>Update</button>
                    <button onClick={this.deleteHandle}>Delete</button>
                </form>
            </React.StrictMode>
        )
    }
}

export default PostData1