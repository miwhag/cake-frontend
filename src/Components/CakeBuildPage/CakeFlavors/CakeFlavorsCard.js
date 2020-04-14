import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/CakeFlavor/CakeFlavor.scss'


export default class CakeFlavorsCard extends Component {

    handleClick = () => {
        this.props.updateCakeColor(this.props.cake)
    }

    render() {
        const {cake_flavor, image, checked} = this.props;
        return (

            <div id="CakeFlavor-main-container">
                {checked ? 
                    <img id="checkmark" 
                        src="https://i.ibb.co/5KW8fJ3/checkmark.png" 
                        alt="checkmark"
                        style={{
                            position: "absolute"
                        }}
                    />
                : null }
            

            <div className="CakeFlavorCard-container"
             style={{opacity: checked ? 0.3 : 1}} 
             onClick={()=> this.handleClick()}
            >   
            
                <img className="CakeFlavorCard-image" src={image} alt={cake_flavor} />
                <p>{cake_flavor}</p>
                
            </div>
            </div>
        )
    }


}
