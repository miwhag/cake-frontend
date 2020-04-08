
import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip';
import '../../Styles/Signup/Signup.css'
import SignupForm from './SignupForm'
import LoginForm from '../Login/LoginForm'

export default class Signup extends Component {

    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleFlipClick = this.handleFlipClick.bind(this);
      }


    handleFlipClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }
    

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <SignupForm flip={this.handleFlipClick} flipDirection="horizontal" flipSpeedBackToFront={0.1}/>
                <LoginForm flip={this.handleFlipClick} flipDirection="horizontal" flipSpeedBackToFront={0.1} {...this.props}  login={this.props.login} />
          </ReactCardFlip>
     
        )
    }
}
