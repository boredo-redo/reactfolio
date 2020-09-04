import React, { Component } from 'react';
import './App.css';

class Login extends Component{
    constructor(props){
        super(props);
    }
    handleUserNameChange = (e) => {
        this.props.onUsernameChange(e.target.value)
    }
    handlePasswordChange = (e) => {
        this.props.onPasswordChange(e.target.value)
    }
    render(){
       
        return(
            <div>
            Username: <input value={this.props.userName} onChange={this.handleUserNameChange} />
            Password: <input value={this.props.password} onChange={this.handlePasswordChange} />
        </div>
        )
    }
}

export default Login;