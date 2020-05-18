
import '../../Styles/HomePage/Homepage.css'
import React from 'react'
import HomePageGreeting from './HomePageGreeting'
import {HomepageImage} from './StyledBubbles'
import Curve from '../../Images/curve.png'
import AboutSection from '../HomePage/AboutSection'
import Footer from '../Footer/Footer'




export default function Homepage() {
    return (
      <>
        <header id="Homepage-header">
            <HomePageGreeting />
            <HomepageImage /> 
        </header>
         <img id="curve" src={Curve} alt='curve'/>
         <AboutSection/>
         <Footer/>
         </>
    )
}
