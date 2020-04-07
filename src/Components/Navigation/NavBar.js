import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/PageItems/NavLinks.css'

export default class NavBar extends Component{

    render(){
    
        return (
                <nav id="Nav-container">
                    <div id="Nav-title-container">
                        <h1 id="Nav-h1">BYC</h1>
                        <div id="Nav-div-bar"></div>
                     </div>
                   
                    <div className="nav-links">
                        <Link to='/'><button id="Nav-home-button">Home</button></Link>
                        <Link to='/login'><button id="Nav-signin-button">Login</button></Link>
            
                    </div>

                </nav>
        )

    }
}
