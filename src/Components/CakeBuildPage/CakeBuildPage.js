import React, { Component } from 'react'
import '../../Styles/CakeBuildPage/CakeBuildPage.css'
import AboutFrostingTypeContainer from './AboutFrostingType/AboutFrostingTypeContainer'
import CakeFlavorsContainer from './CakeFlavors/CakeFlavorsContainer'
import FrostingFlavorTypeContainer from './FrostingFlavorType/FrostingFlavorTypeContainer'
import AboutFinishTypeContainer from './AboutFinishType/AboutFinishTypeContainer'
import CakeModel from './CakeModel/CakeModel'
import FinishTypeContainer from './FinishType/FinishTypeContainer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class CakeBuildPage extends Component {

        state = {
            frosting_flavors: [],
            frosting_type: [],
            frosting_flavor_type: [],
            cake_flavors: [],
            finish_type: [],
            finish_colors: [],
            cake: [],
            finish: [],
            accent: [],
            finish_accents: [],
            accent_changed: false,
            accent_image: 'https://i.ibb.co/xDc5zL3/blank.png',
            finish_color_changed: false,
            finish_color: '#ffffff',
            frosting: [],
            cake_layer_color: '#442727',
            cake_layer_icon: '',
            frosting_layer_image: '',
            cake_color_changed: false,
            frosting_layer_color: '#fde2e2',
            frosting_color_change: false
        }

        componentDidMount(){
            fetch('http://localhost:3030/frosting_flavors')
            .then(response => response.json())
            .then(result => this.setState({frosting_flavors: result.frosting_flavors}),

            fetch('http://localhost:3030/frosting_type')
            .then(response => response.json())
            .then(result => this.setState({frosting_type: result.frosting_type})),

            fetch('http://localhost:3030/frosting_flavor_type')
            .then(response => response.json())
            .then(result => this.setState({frosting_flavor_type: result.frosting_flavor_type})),

            fetch('http://localhost:3030/cake_flavors')
            .then(response => response.json())
            .then(result => this.setState({cake_flavors: result.cake_flavors})),


            fetch('http://localhost:3030/finish_type')
            .then(response => response.json())
            .then(result => this.setState({finish_type: result.finish_type})),


            fetch('http://localhost:3030/finish_colors')
            .then(response => response.json())
            .then(result => this.setState({finish_colors: result.finish_colors})),

            fetch('http://localhost:3030/finish_accents')
            .then(response => response.json())
            .then(result => this.setState({finish_accents: result.finish_accents})),

            )}

        

            updateCakeColor = (cakeObject) => {
                console.log(cakeObject)
                if(this.state.cake_color_changed === false || this.state.cake !== cakeObject.id){
                    this.setState({
                        cake_layer_color: cakeObject.cake_color,
                        cake_layer_icon: cakeObject.icon,
                        cake_color_changed: true,
                        cake: cakeObject
                    })
                }
            }

            updateCakeLayerColor = (finishObject) => {
                console.log(finishObject)
                if(this.state.finish_color_changed === false || this.state.finish !== finishObject.id){
                    this.setState({
                        finish_color_changed: true, 
                        finish: finishObject,
                        finish_color: finishObject.color
                    })
                }
            }

            updateCakeAccent = (accentObject) => {
                if(this.state.accent_changed === false || this.state.accent !== accentObject.id){
                    this.setState({
                        accent_changed: true, 
                        accent: accentObject,
                        accent_image: accentObject.image
                    })
                } 
            }
        
            updateFrostingColor = (frostingObject) => {
                console.log(frostingObject)
                if(this.state.frosting_color_change === false || this.state.frosting !== frostingObject.id){
                this.setState({
                    frosting_layer_color: frostingObject.frosting_color,
                    frosting_layer_image: frostingObject.image,
                    frosting_color_change: true, 
                    frosting: frostingObject
                })

            }
            }
   

    render() {
        return (
            <div id="CakeBuildPage-container">
                <main>
                    <section id="cake-model-container">

                    <CakeModel 
                    finish_color={this.state.finish_color} 
                    cake_color={this.state.cake_layer_color} 
                    cake_icon={this.state.cake_layer_icon} 
                    frosting_image={this.state.frosting_layer_image} 
                    frosting_color={this.state.frosting_layer_color} 
                    accent={this.state.accent_image}/>

                    </section>

                    <section id="cake-build-container">
                        <div id="title-container">
                            <h1 id="title-h1"> Build your Cake</h1>
                            <p id="title-p"> Below are a variety of options to decorate your cake.</p>


                            <Tabs forceRenderTabPanel defaultIndex={1}>
                                <TabList>
                                    <Tab>Cake Flavors</Tab>
                                    <Tab>Frosting Flavors</Tab>
                                    <Tab>Finish</Tab>

                                </TabList>
                            
                                <TabPanel>
                                    <CakeFlavorsContainer 
                                    cake={this.state.cake} 
                                    cake_flavors={this.state.cake_flavors} 
                                    updateCakeColor={this.updateCakeColor}
 />
                                </TabPanel>


                                <TabPanel>
                                    <Tabs forceRenderTabPanel>
                                        <TabList>
                                            <Tab>Choose Frosting Flavor</Tab>
                                            <Tab>About Frosting Types</Tab>
                                        </TabList>
        
                                        
                                        <TabPanel>
                                            <FrostingFlavorTypeContainer 
                                            frosting_flavor_type={this.state.frosting_flavor_type} 
                                            frosting_type={this.state.frosting_type}
                                            frosting={this.state.frosting}
                                            updateFrostingColor={this.updateFrostingColor}
                                            />
                                        </TabPanel>

                                        <TabPanel>
                                        <AboutFrostingTypeContainer frosting_type={this.state.frosting_type} />
                                        </TabPanel>
                                    </Tabs>
                                </TabPanel>

                                <TabPanel>
                                    <Tabs forceRenderTabPanel>
                                        <TabList>
                                            <Tab>Pick Finish Type</Tab>
                                            <Tab>About Finish Types</Tab>
                                        </TabList>
        
                                        <TabPanel>  
                                            <FinishTypeContainer 
                                            finish={this.state.finish} 
                                            finish_type={this.state.finish_type} 
                                            finish_colors={this.state.finish_colors}
                                            finish_accents={this.state.finish_accents}
                                            accent={this.state.accent}
                                            updateCakeLayerColor={this.updateCakeLayerColor}
                                            updateCakeAccent={this.updateCakeAccent}/>
                                        </TabPanel>

                                        <TabPanel>
                                            <AboutFinishTypeContainer finish_type={this.state.finish_type} />
                                        </TabPanel>
                                    </Tabs>
                                </TabPanel>
                            </Tabs>
                        
                        </div>   
                    </section>
                </main>
            </div>
        )
    }
}


