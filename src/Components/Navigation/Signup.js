
import React, { Component } from 'react'
import '../../Styles/Signup/Signup.css'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

export default class Signup extends Component {

    state = {};

    render() {
        return (
            <div id="SignupForm-main-container">
                <SignupForm/>
                <LoginForm />
            </div>
        )
    }
}
