import React, {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../../Styles/NavLinks/NavLinks.css'


export default class NavBar extends Component{

    handleSignOut = (event) => {
        event.preventDefault()
        window.localStorage.clear()
        window.location.href = "/" 

    }

   

    render(){
        return (
                <nav id="Nav-container">
                    <div id="Nav-title-container">
                    <Link to='/'><h1 id="Nav-h1">BYC</h1></Link>
                        <div id="Nav-div-bar"></div>
                     </div>
                   
                   {localStorage.token ? 
                        <div className="nav-links" onClick={this.handleSignOut}>
                            <button id="Nav-signin-button">Logout</button>
                        </div>  
                    : null 
                    }

                </nav>
        )

    }
}
