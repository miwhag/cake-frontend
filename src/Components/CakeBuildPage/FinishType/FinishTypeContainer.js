import React, { Component } from 'react'
import FinishTypeColorCard from './FinishTypeColorCard'
import FinishTypeAccentCard from './FinishTypeAccentCard'
import '../../../Styles/CakeBuildPage/FinishType/FinishTypeContainer.css'

export default class FinishTypeContainer extends Component {
    render(){
        const {finish_colors, finish_accents, finish, updateCakeLayerColor, updateCakeAccent, accent} = this.props;

        const displayColors = () => {
            return finish_colors.map(finish_color => {
                return <FinishTypeColorCard 
                finish={finish_color}
                key={finish_color.id}
                name={finish_color.name}
                color={finish_color.color}
                checked={finish_color.id === finish.id}
                updateCakeLayerColor={updateCakeLayerColor}
                /> 
            })
        }

        const displayAccents= () => {
            return finish_accents.map(finish_accent => {
                return <FinishTypeAccentCard 
                accent={finish_accent}
                key={finish_accent.id}
                name={finish_accent.name}
                image={finish_accent.image}
                checked={finish_accent.id === accent.id}
                updateCakeAccent={updateCakeAccent}
                /> 
            })
        }



        return (
            <div id="FinishTypeContainer-main-container">
                {displayColors()}
                {displayAccents()}
            </div>
    
        )
    
    }
}