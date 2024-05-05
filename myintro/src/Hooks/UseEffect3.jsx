import React, { Component } from 'react'

export class UseEffect3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ""
        }
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count}`
        console.log("ComponentDidMount()");
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count != this.state.count) {
            document.title = `You clicked ${this.state.count}`
            console.log("ComponentDidUpdate");
        }
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(e) => { this.setState({ name: e.target.value }) }} name="" id="" />
                <h4>{this.state.count}</h4>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Add</button>
            </div>
        )
    }
}

export default UseEffect3