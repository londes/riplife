import React, { Component, PropTypes } from 'react';
import ImgFiller from '../ImgFiller/ImgFiller';
import './ImgFillerContainer.css';

class ImgFillerContainer extends Component {
  static propTypes = {
    containerHeight: PropTypes.number,
    containerWidth: PropTypes.number,
    howMany: PropTypes.number
  }
  constructor(props) {
    super(props);
    const imageList = [];
    for (let i = 0; i<this.props.howMany; i++) {
      imageList.push({
        id: i.toString(),
        width: Math.random() * (100- 20) + 20,
        height: Math.random() * (100- 20) + 20,
        x: Math.random() * (600- 10) + 10,
        y: Math.random() * (600- 10) + 10
      })
    }
    this.state = {
      imageList: imageList,
    }
  }

  renderChildImages (arr) {
    return (
      <div>
      {arr.map((monka) => (
        <ImgFiller
          id={monka.id}
          width={monka.width}
          height={monka.height}
          x={monka.x}
          y={monka.y}
          src="/img/monkaS.png" />
      ))}
      </div>
    )
  }

  render () {

    return (
      <div
        style={{flex: 1}}
        className="monkaS-container">
        {this.renderChildImages(this.state.imageList)}
      </div>
    )
  }
}

export default ImgFillerContainer;
