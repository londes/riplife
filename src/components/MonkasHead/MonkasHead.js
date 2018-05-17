import React, { Component, PropTypes } from 'react';
import './MonkasHead.css';

export default class MonkasHead extends Component {
  static propTypes = {
    id: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    xPos: PropTypes.number,
    yPos: PropTypes.number,
  }

  render () {

    let monkaImgStyle = {
      position: "absolute",
      xPos: this.props.xPos,
      yPos: this.props.yPos,
    }

    return (
      <div
        style={monkaImgStyle}
        className="monkaS-head"
        id={this.props.id}
        height={this.props.height}
        width={this.props.width} />
    )
  }
}
