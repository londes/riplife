import React, { Component, PropTypes } from 'react';
import MonkasHead from '../MonkasHead/MonkasHead';
import './MonkasContainer.css';

class MonkasContainer extends Component {
  static propTypes = {
    containerHeight: PropTypes.number,
    containerWidth: PropTypes.number,
    howMany: PropTypes.number
  }

  renderMonkasItems (arr) {
    return (
      <div>
      {arr.map((monka) => (
        <MonkasHead
          id={monka.id}
          width={monka.width}
          height={monka.height}
          x={monka.x}
          y={monka.y} />
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
        {this.renderMonkasItems(monkasItems)}
      </div>
    )
  }
}

export default MonkasContainer;
