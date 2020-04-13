import React, { Component } from 'react'
import FrostingFlavorTypeCard from './FrostingFlavorTypeCard'
import '../../../Styles/CakeBuildPage/FrostingFlavorType/FrostingFlavorType.scss'


export default class FrostingFlavorTypeContainer extends Component{

    state = {
        filtered_flavors: []
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.frosting_flavor_type !== this.props.frosting_flavor_type){
            this.setState({filtered_flavors:nextProps.frosting_flavor_type});
        }
    }

    
    handleFilter = (e) => {
        const filtered = this.props.frosting_flavor_type.filter(frosting => {
           if(e.target.value === frosting.frosting_type.name){
               return frosting
            } 
        })
        this.setState({filtered_flavors: filtered})
    }


    displayFrostingFlavors = () => { 
        
        return this.state.filtered_flavors.map(flavor => 
        <FrostingFlavorTypeCard key={flavor.id} frosting_flavor={flavor.frosting_flavors.name} image={flavor.image} frosting_type={flavor.frosting_type.name} />
        )}
        
   
    showFilterOptions = () => {
        console.log(this.props)
        return this.props.frosting_type.map(frosting => {
            return <option key={frosting.id} className="FrostingFlavorTypeContainer-option">{frosting.name}</option>
        })
    }

    render(){
    
        return (
            <>
            <form id="filter-frostingtype-form">
                <h1>Filter by</h1>
                <select id="FrostingFlavorTypeContainer-select" onChange={this.handleFilter}>
                    <option value="" disabled selected hidden className="FrostingFlavorTypeContainer-option">Select a Frosting Type</option>
                    {this.showFilterOptions()}
                </select>
            </form>
            <div id="FrostingFlavorTypeContainer-main-container">
                {this.displayFrostingFlavors()}
            </div>
    
            </>
        )

    }
    
}

