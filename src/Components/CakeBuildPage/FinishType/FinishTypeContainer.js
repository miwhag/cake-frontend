import React, { Component } from 'react'
import FinishTypeCard from './FinishTypeCard'
import '../../../Styles/CakeBuildPage/FinishType/FinishTypeContainer.css'

export default class FinishTypeContainer extends Component {
    render(){
        const {finish_colors, finish, updateCakeLayerColor} = this.props;

        const displayColors = () => {
            return finish_colors.map(finish_color => {
                return <FinishTypeCard 
                finish={finish_color}
                key={finish_color.id}
                name={finish_color.name}
                color={finish_color.color}
                checked={finish_color.id === finish.id}
                updateCakeLayerColor={updateCakeLayerColor}
    
                /> 
            })
        }

        return (
            <div id="FinishTypeContainer-main-container">
                {displayColors()}
            </div>
    
        )
    
    }
}