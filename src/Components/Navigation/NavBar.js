import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../Styles/NavLinks/NavLinks.css'

export default class NavBar extends Component{

    render(){
    
        return (
                <nav id="Nav-container">
                    <div id="Nav-title-container">
                    <Link to='/'><h1 id="Nav-h1">BYC</h1></Link>
                        <div id="Nav-div-bar"></div>
                     </div>
                   
                    <div className="nav-links">
                        <Link to='/login'><button id="Nav-signin-button">Login</button></Link>
            
                    </div>

                </nav>
        )

    }
}
