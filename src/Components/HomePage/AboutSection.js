import React from 'react'

export default function AboutSection() {
    return (
<div id="about-section">
    <div id="features-title-container">
        <h1 id="features-title">Features</h1>
        <div id="feature-block"></div>
    </div>
    
             <div id="card-container">
                 <div className="card">
                    <img id="cake" src="https://i.imgur.com/CPxrbY4.png" alt="cake" />
                    <div className='title'>
                        <h1>Build</h1>
                        <p>Custom build your cake by deciding things like number of tiers and sizing</p>
                    </div>
                 </div>

                 <div className="card">
                    <img id="cake-flavors" src="https://i.imgur.com/LcIhI83.png?1" alt="cake" />
                    <div className='title'>
                        <h1>Develop</h1>
                        <p>Choose which flavors you want to incorporate into your cake</p>
                    </div>
                 </div>

                 <div className="card">
                 <img id="cake-accents" src="https://i.imgur.com/g1nm0Ug.png?3" alt="cake" />
                    <div className='title'>
                        <h1>Design</h1>
                        <p>Add your final touches by applying design to your cake</p>
                    </div>
                 </div>
             </div>
         </div>
    )
}
