import React, { Component, PropTypes } from 'react';
import './inputField.css';

class inputField extends Component {
  static propTypes = {}

  onItemClicked = () => {
    this.props.onClickHandler(this.props.count);
  }

 render() {
  return (
    <div className="test">
    <div
      onClick={this.onItemClicked}
      className="floating-button">
      {this.props.count}
    </div>
    </div>
  );
 };
}

export default inputField;
