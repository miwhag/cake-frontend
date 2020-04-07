import React, { Component } from 'react'
import '../../Styles/Signup/Signup.css'

export default class SignupForm extends Component {

    state = {
        first_name: "",
        last_name: "",
        username: "",
        password: ""
    }


    handleSignupToggle = () => {

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
          fetch('http://localhost:3030/users', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.state)
          }).then(response => response.json())
    
            this.setState({
                first_name: "",
                last_name: "",
                username: "",
                password: ""
            })
    }
    


    render() {
        return (
            <div id="Signup-form-container">
            <form onSubmit={this.handleSubmit} id="Signup-form" className="Form">

                <div id="button-box">
                    <div id="btn"></div>
                    <button type="button" className="toggle-btn" onClick={this.handleSignupToggle}>Signup</button>
                    <button type="button" className="toggle-btn" onClick={this.handleLoginToggle}>Login</button>
                </div>


                <div id="Signup-first-last-name-container">
                    <input
                        className="Signup-form-input-name" 
                        name="first_name" 
                        type ="text"
                        placeholder="First Name" 
                        value={this.state.first_name}
                        onChange={this.handleChange}
                        >
                    </input>
            
                    <input
                        className="Signup-form-input-name" 
                        name="last_name" 
                        type ="text"
                        placeholder="Last Name" 
                        value={this.state.last_name}
                        onChange={this.handleChange}
                    >
                    </input>
                </div>

                <input
                    className="Signup-form-input" 
                    name="username" 
                    type ="text"
                    placeholder="Username" 
                    value={this.state.username}
                    onChange={this.handleChange}
             >
                </input>

                <input
                    className="Signup-form-input" 
                    name="password" 
                    type ="password"
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.handleChange}
             >

                </input>

                <button 
                    id="Signup-form-submit" 
                    type="submit" 
                    value="Send">
                        Signup
                </button>

            </form>
        </div>
        )
    }
}
