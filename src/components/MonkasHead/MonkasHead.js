import React, { Component, PropTypes } from 'react';
import './MonkasHead.css';

class MonkasHead extends Component {
  static propTypes = {
    id: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
  }

  render () {
    return (
      <div
        style={{height: this.props.height,
          width: this.props.width,
          left: this.props.x,
          top: this.props.y}}
        className="monkaS-head"
        id={this.props.id} />
    )
  }
}

export default MonkasHead;
