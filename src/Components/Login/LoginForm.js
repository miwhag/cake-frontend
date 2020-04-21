import React, { Component } from 'react'

export default class LoginForm extends Component {

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
          .then(() => this.props.history.push('/build_your_cake'))
    }
    

    render() {
        return (
            <div className="SignupForm-main-container">
            <div id="Signup-form-container">
            <form id="Login-form" className="Form" onSubmit={this.handleSubmit}>
            <div className="Signup-title"><h1>Welcome Back</h1></div> 
                <input
                    className="Signup-form-input" 
                    name="username" 
                    type ="text"
                    placeholder="Username" 
                    required
                    value={this.state.username}
                    onChange={this.handleChange}
             >
                </input>

                <input
                    className="Signup-form-input" 
                    name="password" 
                    type ="password"
                    placeholder="Password" 
                    required
                    value={this.state.password}
                    onChange={this.handleChange}
             >
                </input>

                <button 
                    className="Signup-form-submit" 
                    type="submit" 
                    value="Send">
                        Login
                </button>

                <button 
                    id="signup-flip-button" 
                    onClick={this.props.flip}>
                        Signup
                </button>

            </form>
        </div>
        </div>
        )
    }
}
