import React, { Component, PropTypes } from 'react';
import axios from 'axios';
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
    event.preventDefault();
    alert(event);

    if (typeof this.state.vidLink === 'string' || this.state.vidLink instanceof String) {
      let cleanVidLink = this.state.vidLink.trim();
      let splitVidLink = cleanVidLink.split('/');
      if (splitVidLink[0] === "clips.twitch.tv" || splitVidLink[2] === "clips.twitch.tv") {
        alert('thank ye for submitting a rippy clippy');

        axios.post(this.props.url, {url: this.state.vidLink})
          .then(res => {
            this.setState({vidLink: res});
          })
          .catch(err => {
            console.error(err);
          });
      }
      else{
        alert(this.state.vidLink + 'is not a rippy clippy. please submit a rippy twitch clip.');
      }
    }
    else{
      alert(this.state.vidLink + 'is not a rippy clippy. please submit a rippy twitch clip.');
    }
  }

 render() {
  return (
    <form onSubmit={this.submitHandle}>
      <label>
        sned twitch clip:
        <input type="text" value={this.state.vidLink} onChange={this.changeHandler} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
 };
}

export default inputField;
