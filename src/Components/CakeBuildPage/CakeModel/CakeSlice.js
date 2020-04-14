import React, { Component } from 'react'
import '../../../Styles/CakeBuildPage/CakeModel/CakeModel.scss'


export default class CakeSlice extends Component {

    render() {
        
        return (
        <>
            <div id="cake-slice-container">

            <div id="cake-layer-section">
            <div className="cake-layer-slice" style={{backgroundColor: this.props.cake_color}}></div>
            <div className="frosting-layer-slice" style={{backgroundColor: this.props.frosting_color}}></div>
            <div className="cake-layer-slice" style={{backgroundColor: this.props.cake_color}}></div>
            <div className="frosting-layer-slice" style={{backgroundColor: this.props.frosting_color}}></div>
            <div className="cake-layer-slice" style={{backgroundColor: this.props.cake_color}}></div>
          </div>

            </div>
            </>
        )
    }
}
