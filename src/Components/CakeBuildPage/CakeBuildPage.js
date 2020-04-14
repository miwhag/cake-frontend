import React, { Component } from 'react'
import '../../Styles/CakeBuildPage/CakeBuildPage.css'
import AboutFrostingTypeContainer from './AboutFrostingType/AboutFrostingTypeContainer'
import CakeFlavorsContainer from './CakeFlavors/CakeFlavorsContainer'
import FrostingFlavorTypeContainer from './FrostingFlavorType/FrostingFlavorTypeContainer'
import AboutFinishTypeContainer from './AboutFinishType/AboutFinishTypeContainer'
import CakeModel from './CakeModel/CakeModel'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class CakeBuildPage extends Component {

        state = {
            frosting_flavors: [],
            frosting_type: [],
            frosting_flavor_type: [],
            cake_flavors: [],
            finish_type: [],
            cake_layer_color: '#442727',
            frosting_layer_color: '#fde2e2'
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
            .then(result => this.setState({finish_type: result.finish_type}))
            )}


            updateCakeColor = (cakeColor) => {
                this.setState({
                    cake_layer_color: cakeColor
                })
            }
        
            updateFrostingColor = (frostingColor) => {
                this.setState({
                    frosting_layer_color: frostingColor
                })
            }
   

    render() {
        return (
            <div id="CakeBuildPage-container">
                <main>
                    <section id="cake-model-container">
                    <CakeModel cake_color={this.state.cake_layer_color} frosting_color={this.state.frosting_layer_color}/>
                    </section>

                    <section id="cake-build-container">
                        <div id="title-container">
                            <h1 id="title-h1"> Build your Cake</h1>
                            <p id="title-p"> Below are a variety of options to decorate your cake.</p>


                            <Tabs forceRenderTabPanel defaultIndex={1}>
                                <TabList>
                                    <Tab>Cake Flavors</Tab>
                                    <Tab>Frosting Flavors</Tab>
                                    <Tab>Cake Info</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <CakeFlavorsContainer cake_flavors={this.state.cake_flavors} updateCakeColor={this.updateCakeColor}
 />
                                </TabPanel>

                                <TabPanel>
                                    <FrostingFlavorTypeContainer 
                                    frosting_flavor_type={this.state.frosting_flavor_type} 
                                    frosting_type={this.state.frosting_type}
                                    updateFrostingColor={this.updateFrostingColor}
                                    />
                                </TabPanel>

                                <TabPanel>
                                    <Tabs forceRenderTabPanel>
                                        <TabList>
                                            <Tab>About Frosting Types</Tab>
                                            <Tab>About Finish Types</Tab>
                                        </TabList>
        
                                        <TabPanel>  
                                            <AboutFrostingTypeContainer frosting_type={this.state.frosting_type} />
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


