
import '../../Styles/HomePage/Homepage.css'
import React from 'react'
import HomePageGreeting from './HomePageGreeting'
import {HomepageImage} from './StyledBubbles'



export default function Homepage() {
    return (
        <header id="Homepage-header">
            <HomePageGreeting />
            <HomepageImage /> 
        </header>
      
      

    )
}
