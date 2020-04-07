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
          fetch('http://localhost:3030/login', {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.state)
          }).then(response => response.json())
          .then(user => console.log(user ))
    
            this.setState({
                password: '',
                username: '',
            })
    }
    

    render() {
        return (
            <div id="Signup-form-container">
            <form id="Login-form" className="Form" onClick={this.handleSubmit}>

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
                        Login
                </button>

            </form>
        </div>
        )
    }
}
