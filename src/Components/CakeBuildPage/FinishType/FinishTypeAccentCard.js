import React, { Component } from 'react'

export default class FinishTypeAccentCard extends Component {
    handleClick = () => {
        this.props.updateCakeAccent(this.props.accent)
    }

    render() {
        const {image, name, checked} = this.props;
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
  
                <div className="FinishTypeCard-accent" 
                style={{ 
                    opacity: checked ? 0.3 : 1
                    }}
                onClick={() => this.handleClick()}>
                    <img style={{width: "70px"}}src={image} alt={name}/>
                    </div>
            
                </div>
        )
    }

}
