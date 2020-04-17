import React from 'react'
import '../../Styles/HomePage/HomePageGreeting.scss'
import {Link} from 'react-router-dom'

export default function HomePageGreeting() {
    return (
        <div id="greeting-container">
            <h3 id="greeting-container-h3">BUILD YOUR</h3>
            <h1 id="greeting-container-h1">CAKE</h1>
            <p id="greeting-container-p"> Planning your cake has never been simpler. </p>
            <Link to='/signup'><button id="greeting-container-button"> GET STARTED </button></Link>
        </div>
    )
}

