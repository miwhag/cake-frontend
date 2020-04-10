import React from 'react'
import '../../../Styles/CakeBuildPage/CakeModel/CakeModel.scss'

export default function EdgeFrosting(props) {
  var frostingParts = [];
  for (let i = 0; i < props.count; i++)
  {
    let partClass = (i % 2 === 0 ? "frosting-part" : "frosting-part-small") + " " + props.flavor;
    frostingParts.push(<div key={i} className={partClass}></div>);
  }

  const layerStyle = {
    width: (props.width + 2 * props.margin) + "px",
    marginLeft: -props.margin
  };

  let myClass = "frosting-row";
  if (props.isBottom) {
    myClass += " bottom-frosting";
  }

  return (
    <div className={myClass} style={layerStyle}>
      {frostingParts}
    </div>
  );
}