import React, { Component } from 'react'
import '../../Styles/Signup/Signup.css'

export default class MiniLoginForm extends Component {

    state = {
       password: '',
       username: '',
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
          this.props.login(this.state)
          .then(() => window.location.href = "/dashboard")
    }
    

    render() {
        return (
            <form id="Mini-Login-form" onSubmit={this.handleSubmit}>
                <input
                    className="Mini-Signin-form-input" 
                    name="username" 
                    type ="text"
                    placeholder="Username" 
                    required
                    value={this.state.username}
                    onChange={this.handleChange}
             >
                </input>

                <input
                    className="Mini-Signin-form-input" 
                    name="password" 
                    type ="password"
                    placeholder="Password" 
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
             >
                </input>

                <button 
                    className="Mini-Signin-form-submit" 
                    type="submit" 
                    value="Send">
                        <i class="fas fa-sign-in-alt"></i>
                </button>

            </form>
        )
    }
}
