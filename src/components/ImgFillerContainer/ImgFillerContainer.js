import React, { Component, PropTypes } from 'react';
import ImgFiller from '../ImgFiller/ImgFiller';
import './ImgFillerContainer.css';

class ImgFillerContainer extends Component {
  static propTypes = {
    containerHeight: PropTypes.number,
    containerWidth: PropTypes.number,
    howMany: PropTypes.number
  }

  renderChildImages (arr, childItem) {
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
    // let containerStyle = {};
    // let monkasItems = new Array(this.props.howMany);
    // monkasItems = monkasItems.forEach((monka, index) => {
    //   {
    //     id: index.toString(),
    //     width: Math.random() * (100- 20) + 20,
    //     height: Math.random() * (100- 20) + 20,
    //     x: Math.random() * (400- 10) + 10,
    //     y: Math.random() * (400- 10) + 10
    //   }
    // });

    const monkasItems = [
      {
        id: "1",
        width: 30,
        height: 30,
        x: 40,
        y: 90,
      },
      {
        id: "2",
        width: 70,
        height: 70,
        x: 100,
        y: 120,
      },
      {
        id: "3",
        width: 90,
        height: 90,
        x: 200,
        y: 200,
      }
    ];

    return (
      <div
        style={{flex: 1}}
        className="monkaS-container">
        {this.renderChildImages(monkasItems)}
      </div>
    )
  }
}

export default ImgFillerContainer;
