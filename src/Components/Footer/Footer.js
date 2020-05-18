import React from 'react'
import '../../Styles/HomePage/Homepage.css'
import PurpleCurve from '../../Images/purple_curve.png'

export default function Footer() {
    return (
        <>
        <img id="purple_curve" src={PurpleCurve} alt="purple_curve"/>
        <div id="footer"> 
            <h3 id="copyright">© 2020 Build Your Cake</h3>
        </div>
        </>
    )
}
