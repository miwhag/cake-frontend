import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/FrostingFlavorType/FrostingFlavorType.css'


export default class FrostingFlavorTypeCard extends Component {

    state = { 
        opacity_set: "",
        opacity: false,
        checkmark: false,
        display: "none",
        checkmark_opacity: "",
        z_index: "", 
        position: ""
    }

    handleClick = () => {
        this.props.updateFrostingColor(this.props.frosting)
    }

    render() {
        const {frosting_flavor, image, frosting_type, checked} = this.props;
        return (
            <div id="FrostingFlavor-main-container">
                {checked ? 
                    <img id="checkmark" 
                        src="https://i.ibb.co/5KW8fJ3/checkmark.png" 
                        alt="checkmark"
                        style={{
                            position: "absolute"
                        }}
                    />
                : null }
                
                <div id="FrostingFlavorTypeCard-container" 
                    style={{opacity: checked ? 0.3 : 1}} 
                    onClick={()=> this.handleClick()}>    

                    <img className="FrostingFlavorType-image" src={image} alt={frosting_flavor}/>
                    <p id="frosting-flavor">{frosting_flavor}</p>
                    <p id="frosting-type">{frosting_type}</p>
                </div>
            </div>
        )
    }
}

