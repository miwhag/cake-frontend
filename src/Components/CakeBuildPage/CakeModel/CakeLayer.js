import React from 'react'
import Frosting from './Frosting'
import '../../../Styles/CakeBuildPage/CakeModel/CakeModel.scss'


const MAX_WIDTH = 275;
const FLAVORS = ["strawberry", "vanilla", "coffee", "chocolate", "mint", "lemon", "orange"]
const FROSTING_MARGIN = 3;
const BASE_MARGIN = 12;


export default class CakeLayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {flavorIndex: 0};
    this.changeFlavor = this.changeFlavor.bind(this);
  }
  
  changeFlavor(event) {
    if (this.props.canBuild) {
      this.setState((prevState, props) => ({
        flavorIndex: (prevState.flavorIndex < FLAVORS.length - 1 ? prevState.flavorIndex + 1 : 0)
      }));
    }
  }
  
  render() {
    const layerStyle = {
      width: this.props.width + "px",
      marginLeft: (MAX_WIDTH - this.props.width) / 2
    };
    

    
    return (
      <button className={"cake-layer " + FLAVORS[this.state.flavorIndex]} onClick={this.changeFlavor} style={layerStyle}>
        <Frosting width={this.props.width} margin={FROSTING_MARGIN}  flavor={FLAVORS[this.state.flavorIndex]} />
        {(this.props.frostingOnBottom) ? <Frosting width={this.props.width} margin={BASE_MARGIN}  isBottom={true} flavor={FLAVORS[this.state.flavorIndex]} /> : ""}
      </button>
    );
  }
}
