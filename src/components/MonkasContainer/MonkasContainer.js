import React, { Component, PropTypes } from 'react';
import MonkasHead from '../MonkasHead/MonkasHead';
import './MonkasContainer.css';

class MonkasContainer extends Component {
  static propTypes = {
    containerHeight: PropTypes.number,
    containerWidth: PropTypes.number,
  }

  renderMonkasItems (monkasItems) {
    return (
      <div>
      {monkasItems.map((monka) => (
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

    let containerStyle = {

    }

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
        style={{height: this.props.containerWidth,
          width: this.props.containerHeight}}
        className="monkaS-container">
        {this.renderMonkasItems(monkasItems)}
      </div>
    )
  }
}

export default MonkasContainer;
