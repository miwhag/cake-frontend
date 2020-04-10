import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/AboutFrostingType/AboutFrostingType.css'

export default class AboutFrostingTypeCard extends Component {
    render() {
        const {frosting, info} = this.props;
        return (
            <div id="FrostingFlavorCard-container">
                <h1 id="FrostingType-h1">{frosting}</h1>
                 <p id="FrostingType-p">{info}</p>
                 <div id="line-break"></div>
        </div>
        )
    }
}

