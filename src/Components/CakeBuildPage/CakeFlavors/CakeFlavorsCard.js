import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/CakeFlavor/CakeFlavor.scss'

export default class CakeFlavorsCard extends Component {


    render() {
        const {cake_flavor, image} = this.props;
        return (
            <div className="CakeFlavorCard-container">
                <img className="CakeFlavorCard-image" src={image} alt={cake_flavor} />
                <p>{cake_flavor}</p>
                
            </div>
        )
    }
}
