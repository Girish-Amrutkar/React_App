import React, { Component } from 'react'
import User from './Assets/User.png'
import Password from './Assets/Pass.png'
import Email from './Assets/Email.png'
import './Form.css';

export default class RegForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         action : "SIGN UP"
      }
    }
    render() {
        return (
            <React.StrictMode>
                <form action="">
                    <div className='main' id='parentCont'>
                        <div className="text">{this.state.action}</div>
                        <div className='parent'>
                            {
                                this.state.action==="LOG IN"?<div></div>:<div className='input'>
                                <img src={User} alt="" />
                                <input type="username" name="" id="" placeholder='Name' />
                            </div>
                            }
                            <div className="input">
                                <img src={Email} alt="" />
                                <input type="email" name="" id="" placeholder='Email' />
                            </div>
                            <div className="input">
                                <img src={Password} alt="" />
                                <input type="password" name="" id="" placeholder='Password' />
                            </div>
                            <div className='pass'>
                                <p>Forgot Password?<span>Click Here!</span></p>
                            </div>
                            <div className='submit'>
                                <div className={this.state.action ==="LOG IN"?"grey":"signup"} onClick={()=>{this.setState({action:"SIGN UP"})}}>Sign Up</div>
                                <div className={this.state.action ==="SIGN UP"? "grey":"login"} onClick={()=>{this.setState({action:"LOG IN"})}}>Log In</div>
                            </div>
                        </div>
                    </div>
                </form>
            </React.StrictMode >
        )
    }
}
