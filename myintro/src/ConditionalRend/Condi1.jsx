import React, { Component } from 'react'
import { Login } from './Login'
import { Reg } from './Reg'

export default class Condi1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isReg: false
        }
    }
    render() {
        if (this.state.isLogIn) {
            return (
                <Login />
            )
        }
        else {
            return (
                <Reg />
            )
        }
    }
}
