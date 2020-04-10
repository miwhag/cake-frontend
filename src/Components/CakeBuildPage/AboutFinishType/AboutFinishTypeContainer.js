import React from 'react'
import AboutFinishTypeCard from './AboutFinishTypeCard'
import '../../../Styles/CakeBuildPage/AboutFinishType/AboutFinishType.css'

export default function AboutFinishTypeContainer(props) {
const {finish_type} = props; 

const displayFinishTypes = () => finish_type.map(finish => 
     <AboutFinishTypeCard key={finish.id} name={finish.name} info={finish.info} image={finish.image}/>
    )

    return (
        <div id="AboutFinishTypeContainer">
            {displayFinishTypes()}
        </div>
    )
}
