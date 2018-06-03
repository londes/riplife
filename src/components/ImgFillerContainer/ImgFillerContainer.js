import React, { Component, PropTypes } from 'react';
import ImgFiller from '../ImgFiller/ImgFiller';
import './ImgFillerContainer.css';

class ImgFillerContainer extends Component {
  static propTypes = {
    containerId: PropTypes.string,
    containerHeight: PropTypes.number,
    containerWidth: PropTypes.number,
    howMany: PropTypes.number,
    imgSrc: PropTypes.string
  }
  constructor(props) {
    super(props);
    const imageList = [];
    this.state = {
      imageList: imageList,
      newContainerHeight: 10
    }
    for (let i = 0; i<this.props.howMany; i++) {
      imageList.push({
        id: i.toString(),
        width: Math.random() * (120 - 20) + 20,
        height: Math.random() * (120 - 20) + 20,
        x: Math.random() * (this.props.containerWidth - 60),
        y: Math.random() * (1832 - 60)
      })
    }
  }

  componentDidMount() {
    let height = document.getElementById(`${this.props.containerId}`).clientHeight;
    this.setState({
      newContainerHeight: height,
    })
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
          src={this.props.imgSrc} />
      ))}
      </div>
    )
  }

  render () {

    return (
      <div
        id={this.props.containerId}
        style={{flex: 1}}
        className="monkaS-container">
        {this.renderChildImages(this.state.imageList)}
      </div>
    )
  }
}

export default ImgFillerContainer;
