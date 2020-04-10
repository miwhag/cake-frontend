import React, { Component } from 'react'
import CakeFlavorsCard from './CakeFlavorsCard'
import '../../../Styles/CakeBuildPage/CakeFlavor/CakeFlavor.scss'


export default class CakeFlavorsContainer extends Component{

    render(){
        const {cake_flavors} = this.props;

        const displayFlavors = () => { 
            return cake_flavors.map(cake_flavor => 
             <CakeFlavorsCard key={cake_flavor.id} cake_flavor={cake_flavor.name} image={cake_flavor.image} />
            )}

        return (
           
            <div id="CakeFlavorsContainer-main-container">
                {displayFlavors()}
            </div>
        )
    }
    
}
