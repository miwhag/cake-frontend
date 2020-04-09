import React from 'react'
import FrostingFlavorTypeCard from './FrostingFlavorTypeCard'
import '../../../Styles/CakeBuildPage/FrostingFlavorType/FrostingFlavorType.scss'


export default function FrostingFlavorTypeContainer({frosting_flavor_type}) {

const displayFrostingFlavors = () => { 
    return frosting_flavor_type.map(frosting_flavor => 
     <FrostingFlavorTypeCard key={frosting_flavor.id} frosting_flavor={frosting_flavor.name} image={frosting_flavor.image} />
    )}

    return (
        <div id="FrostingFlavorTypeContainer-main-container">
            {displayFrostingFlavors()}
        </div>
    )
}
