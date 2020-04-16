import React from 'react';


export default function CakeAccent(props){

    return (
      <div className="frosting-row">
          <img style={{width: '65px', marginLeft: '10px'}}src={props.accent} alt="5" border="0"/>
      </div>
    );
  }
  