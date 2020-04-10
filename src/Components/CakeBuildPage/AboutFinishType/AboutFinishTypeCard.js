import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/AboutFinishType/AboutFinishType.css'

export default class AboutFrostingTypeCard extends Component {
    render() {
        const {name, info, image} = this.props;
        return (
            <div id="AboutFinishTypeCard-container">
                <img className="AboutFinishTypeCard-image" src={image} alt={name}/>
                <h1 id="AboutFinishTypeCard-h1">{name}</h1>
                 <p id="AboutFinishTypeCard-p">{info}</p>
                 

        </div>
        )
    }
}

