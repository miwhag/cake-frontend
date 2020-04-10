import React, { Component } from 'react'
import Cake from './Cake'
import Plate from './Plate'
import CakeControls from './CakeControls'
import CakeLayer from './CakeLayer'
import '../../../Styles/CakeBuildPage/CakeModel/CakeModel.scss'


const MAX_LAYERS = 3;
// Width in pixels of the bottom cake layer
const MIN_WIDTH = 125;
const MAX_WIDTH = 275;
const START_WIDTH = 200;
// Percentage of the previous layer's width to give to a layer
const LAYER_PERCENTAGE = 70;

export default class CakeModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
          layers: 2,
          candles: 3,
          width: START_WIDTH,
          candlesBlownOut: false,
          canBuild: true,
          eating: false,
          eatTimer: -1
         };
        this.addLayer = this.addLayer.bind(this);
        this.removeLayer = this.removeLayer.bind(this);
    
        this.addWidth = this.addWidth.bind(this);
        this.removeWidth = this.removeWidth.bind(this);
    
      }
      
      
      addLayer() {
        if (this.state.canBuild) {
          this.setState((prevState, props) => ({
            layers: Math.min(prevState.layers + 1, MAX_LAYERS),
          }));
        }
      }
      
      removeLayer() {
        if (this.state.canBuild && this.state.layers > 0) {
          this.setState((prevState, props) => ({
            layers: Math.max(prevState.layers - 1, 1)
          }));
        }
      }
      
    
      addWidth() {
        if (this.state.canBuild && this.state.layers > 0) {
          this.setState((prevState, props) => ({
            width: Math.min(prevState.width + 25, MAX_WIDTH)
          }));
        }
      }
      
      removeWidth() {
        if (this.state.canBuild && this.state.layers > 0) {
          this.setState((prevState, props) => ({
            width: Math.max(prevState.width - 25, MIN_WIDTH),
          }));
        }
      }

    render(){
            let renderedLayers = [];
            for (let i = 0; i < this.state.layers; i++)
            {
              let layerWidth = this.state.width * Math.pow(LAYER_PERCENTAGE / 100, i);
              renderedLayers.push(<CakeLayer key={i} width={layerWidth}  canBuild={this.state.canBuild} />);
            }
            
        return (
            <div className="container">
                <div id="control-container">
                    <CakeControls addLayer={this.addLayer} removeWidth={this.removeWidth} addWidth={this.addWidth} canBuild={this.state.canBuild} removeLayer={this.removeLayer}/>
                </div>
                <div className="cake">
                    {renderedLayers}
                </div>
                <Plate />  
            </div>
        ) 
    }
    
}

