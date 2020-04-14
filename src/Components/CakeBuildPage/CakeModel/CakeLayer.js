import React from 'react'
import '../../../Styles/CakeBuildPage/CakeModel/CakeModel.scss'


const MAX_WIDTH = 275;


export default class CakeLayer extends React.Component {

  state ={

  }

  render() {
    const layerStyle = {
      width: this.props.width + "px",
      marginLeft: (MAX_WIDTH - this.props.width) / 2
    };
  

    return (
      <button className={"cake-layer"}  style={layerStyle}>
      </button>
    );
  }
}
