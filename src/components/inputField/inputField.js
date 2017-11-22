import React, { Component, PropTypes } from 'react';
import './InputField.css';

class inputField extends Component {
  constructor (props) {
    super (props);
    this.state = {
      vidLink: '',
    };
  };
  static propTypes = {
  }

  changeHandler = (event) => {
    this.setState({vidLink: event.target.value});
  }

  submitHandle = (event) => {
    alert('A vid: ' + this.state.vidLink);
    event.preventDefault();
  }

 render() {
  return (
    <form onSubmit={this.submitHandle}>
      <label>
        sned noodz:
        <input type="text" value={this.state.vidLink} onChange={this.changeHandler} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
 };
}

export default inputField;
