import React from 'react'
import '../../../Styles/CakeBuildPage/CakeModel/CakeModel.scss'

export default function CakeControls(props) {
  const buildClass = (!props.canBuild ? " no-build" : "");
  return (
    <div className="cake-controls">
      <div className="direction-controls">
        <button className={"btn-up" + buildClass} onClick={props.addLayer}>
          <i className="fas fa-angle-up"></i>
        </button>
        <button className={"btn-narrow" + buildClass} onClick={props.removeWidth}>
          <i className="fas fa-angle-right"></i>
          <i className="fas fa-angle-left"></i>
        </button>
        <button className={"btn-wide" + buildClass} onClick={props.addWidth}>
          <i className="fas fa-angle-left"></i>
          <i className="fas fa-angle-right"></i>
        
        </button>
        <button className={"btn-down" + buildClass} onClick={props.removeLayer}>
          <i className="fas fa-angle-down"></i>
        </button>
      </div>

     
    </div>
  );
}