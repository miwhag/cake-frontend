import React from 'react'
import '../../../Styles/CakeBuildPage/CakeModel/CakeModel.scss'
import CakeAccent from './CakeAccent'
const MAX_WIDTH = 275;


export default class CakeLayer extends React.Component {

  render() {
    const layerStyle = {
      width: this.props.width + "px",
      marginLeft: (MAX_WIDTH - this.props.width) / 2, 
      background: this.props.finish_color
    };

    return (
      
      <button className={"cake-layer"}  style={layerStyle}>
      <CakeAccent accent={this.props.accent} />
      </button>
    );
  }
}
