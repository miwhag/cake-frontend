import React from 'react'
import FrostingTypeCard from './AboutFrostingTypeCard'
import '../../../Styles/CakeBuildPage/AboutFrostingType/AboutFrostingType.css'


export default function AboutFrostingTypeContainer({frosting_type}) {

const displayFrostingTypes = () => { 
    return frosting_type.map(frosting => 
     <FrostingTypeCard key={frosting.id} frosting={frosting.name} info={frosting.info} />
    )}

    return (
        <div id="AboutFrostingType-main-container">
            {displayFrostingTypes()}
        </div>
    )
}
