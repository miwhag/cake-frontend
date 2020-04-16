import React, { Component } from 'react'

export default class FinishTypeColorCard extends Component {

    handleClick = () => {
        this.props.updateCakeLayerColor(this.props.finish)
    }

    render() {
        const {color, checked} = this.props;
        return (

            <div id="FinishTypeCard-main-container">
                {checked ? 
                    <img id="checkmark" 
                        src="https://i.ibb.co/5KW8fJ3/checkmark.png" 
                        alt="checkmark"
                        style={{
                            position: "absolute"
                        }}
                    />
                : null }
  
                <div className="FinishTypeCard-color" 
                style={{ 
                    background: color,
                    opacity: checked ? 0.3 : 1
                    }}
                onClick={() => this.handleClick()} />
                
            </div>
        )
    }

}
