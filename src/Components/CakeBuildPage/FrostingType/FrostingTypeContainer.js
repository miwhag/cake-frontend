import React from 'react'
import FrostingTypeCard from './FrostingTypeCard'
import '../../../Styles/CakeBuildPage/FrostingType/FrostingType.scss'


export default function FrostingTypeContainer({frosting_type}) {

const displayFrostingTypes = () => { 
    return frosting_type.map(frosting => 
     <FrostingTypeCard key={frosting.id} frosting={frosting.name} info={frosting.info} />
    )}

    return (
        <div id="CakeFlavorsContainer-main-container">
            {displayFrostingTypes()}
        </div>
    )
}
