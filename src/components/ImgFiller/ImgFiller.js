import React, { Component, PropTypes } from 'react';
import './ImgFiller.css';

class ImgFiller extends Component {
  static propTypes = {
    id: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    src: PropTypes.string
  }

  render () {
    return (
      <img
        style={{height: this.props.height,
          width: this.props.width,
          left: this.props.x,
          top: this.props.y,}}
          src={this.props.src}
          className="image-item"
          id={this.props.id} />
    )
  }
}

export default ImgFiller;
