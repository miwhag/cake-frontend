import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/FrostingFlavorType/FrostingFlavorType.css'


export default class FrostingFlavorTypeCard extends Component {
    render() {
        const {frosting_flavor, image} = this.props;
        return (
            <div id="FrostingFlavorTypeCard-container">
                <img className="FrostingFlavorType-image" src={image} alt={frosting_flavor} />
                 <p>{frosting_flavor}</p>
        </div>
        )
    }
}

