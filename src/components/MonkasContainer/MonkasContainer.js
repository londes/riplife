import React, { Component, PropTypes } from 'react';
import MonkasHead from '../MonkasHead/MonkasHead';
import './MonkasContainer.css';

export default class MonkasContainer extends Component {
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

    const monkasItems = [
      {
        id: "1",
        width: 30,
        height: 30,
        x: 20,
        y: 60,
      },
      {
        id: "2",
        width: 30,
        height: 30,
        x: 20,
        y: 60,
      },
      {
        id: "3",
        width: 30,
        height: 30,
        x: 20,
        y: 60,
      }
    ];

    return (
      <div
        width={this.props.containerWidth}
        height={this.props.containerHeight}
        className="monkas-container">
        {this.renderMonkasItems(monkasItems)}
      </div>
    )
  }
}
