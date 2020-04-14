import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/CakeFlavor/CakeFlavor.scss'


export default class CakeFlavorsCard extends Component {

    state = { 
        opacity_set: "",
        opacity: false,
        checkmark: false,
        display: "none",
        checkmark_opacity: "",
        z_index: "", 
        position: ""
    }

    handleOpacityClick = () => {
        if(this.state.opacity === false){
            this.setState({
                opacity_set: "0.2", 
                opacity: true
            })
        }else {
                this.setState({
                opacity_set: "", 
                opacity: false
            })
        }
    }

    handleCheckMark = () => {
        if(this.state.checkmark === false){
            this.setState({
                display: "", 
                checkmark: true,
                checkmark_opacity: "1",
                z_index: "10", 
                position: "absolute"
            })
        }else {
                this.setState({
                display: "none", 
                checkmark: false,
                checkmark_opacity: "0",
                z_index: "", 
                position: ""
            })
        }
    }

    handleClick = () => {
        this.handleCheckMark()
        this.handleOpacityClick()
        this.props.updateCakeColor(this.props.cake_color)
        
    }

    render() {
        const {cake_flavor, image} = this.props;
        return (

            <div id="CakeFlavor-main-container">

            <img id="checkmark" 
                src="https://i.ibb.co/5KW8fJ3/checkmark.png" 
                alt="checkmark"
                style={{display: this.state.display, opacity: this.state.checkmark_opacity_set, zIndex: this.state.z_index, position: this.state.position}}
            />

            <div className="CakeFlavorCard-container"
             style={{opacity: this.state.opacity_set, zIndex: this.state.z_index}} 
             onClick={()=> this.handleClick()}
            >   
            
                <img className="CakeFlavorCard-image" src={image} alt={cake_flavor} />
                <p>{cake_flavor}</p>
                
            </div>
            </div>
        )
    }
}
