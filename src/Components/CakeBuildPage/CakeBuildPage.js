import React, { Component } from 'react'
import '../../Styles/CakeBuildPage/CakeBuildPage.css'
import FrostingTypeContainer from './FrostingType/FrostingTypeContainer'
import CakeFlavorsContainer from './CakeFlavors/CakeFlavorsContainer'
import FrostingFlavorTypeContainer from './FrostingFlavorType/FrostingFlavorTypeContainer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


export default class CakeBuildPage extends Component {

        state = {
            frosting_flavors: [],
            frosting_type: [],
            frosting_flavor_type: [],
            cake_flavors: []
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
            .then(result => this.setState({cake_flavors: result.cake_flavors}))
            )}


    render() {
        return (
            <div id="CakeBuildPage-container">
                <main>
                    <section id="cake-image-container">
                    <img id="cake-img" src="https://i.ibb.co/n1YL2gJ/templatecake.jpg" alt="cake" />
                    </section>

                    <section id="cake-build-container">
                        <div id="title-container">
                            <h1 id="title-h1"> Build your Cake</h1>
                            <p id="title-p"> Below are a variety of options to decorate your cake.</p>


                            <Tabs>
                                <TabList>
                                <Tab>Cake Flavors</Tab>
                                <Tab>Frosting Flavors</Tab>
                                <Tab>All Frosting Types</Tab>
                                <Tab>About Frosting Types</Tab>
                                <Tab>About Finish Types</Tab>
                                </TabList>
                            
                                <TabPanel>
                                <CakeFlavorsContainer cake_flavors={this.state.cake_flavors} />
                                </TabPanel>

                                <TabPanel>
                                <FrostingFlavorTypeContainer frosting_flavor_type={this.state.frosting_flavor_type} />
                                </TabPanel>

                                <TabPanel>
                     
                                </TabPanel>


                                <TabPanel>
                                <FrostingTypeContainer frosting_type={this.state.frosting_type} />
                                </TabPanel>

                                <TabPanel>
                     
                                </TabPanel>


                            </Tabs>
                        </div>   
                    </section>
                </main>
            </div>
        )
    }
}


