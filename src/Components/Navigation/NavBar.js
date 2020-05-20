import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import MiniLoginForm from '../Login/MiniLoginForm'
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
                        <div id="logo">
                            <img id="image-logo" src="https://i.imgur.com/HY2IPkC.png" alt="logo"/>
                            <Link to='/'><h1 id="Nav-h1">BYC</h1></Link>
                        </div>
                      
                           {!localStorage.token ? 
                            <div>
                                <MiniLoginForm/> 
                            </div>
                           : null}   
                   
                   {localStorage.token ? 
                    <div className="nav-link-container">
                        <div className="nav-links" onClick={this.handleSignOut}>
                            <a href="/">Logout</a>
                        </div>  

                        <div className="nav-links">
                            <a href="/dashboard">Dashboard</a>
                        </div>

                        <div className="nav-links">
                            <a href="/build_your_cake">Build Your Cake</a>
                        </div>
                    </div>
                    : null 
                    }

                    </div>
                </nav>
        )

    }
}
