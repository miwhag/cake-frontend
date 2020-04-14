import React, { Component } from 'react'
import CakeFlavorsCard from './CakeFlavorsCard'
import '../../../Styles/CakeBuildPage/CakeFlavor/CakeFlavor.scss'


export default class CakeFlavorsContainer extends Component{

    state={}

    render(){
        const {cake_flavors, updateCakeColor, cake} = this.props;

        const displayFlavors = () => { 
            return cake_flavors.map(cake_flavor => 
             <CakeFlavorsCard 
             cake={cake_flavor}
             key={cake_flavor.id} 
             cake_flavor={cake_flavor.name} 
             image={cake_flavor.image} 
             cake_color={cake_flavor.cake_color}
             updateCakeColor={updateCakeColor}
             checked={cake_flavor.id === cake.id}
             />
            )}

        return (
            <div id="CakeFlavorsContainer-main-container">
                {displayFlavors()}
            </div>
        )
    }
    
}
