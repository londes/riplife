import React, { Component, PropTypes } from 'react';
import './InputField.css';

class InputField extends Component {
  constructor (props) {
    super (props);
    this.state = {
      vidLink: '',
      clipUrl: '',
      clipId: '',
    };
  };
  static propTypes = {
  }

  changeHandler = (event) => {
    this.setState({vidLink: event.target.value});
  }

  submitHandle = (event) => {
    event.preventDefault();

    if (typeof this.state.vidLink === 'string' || this.state.vidLink instanceof String) {
      let cleanVidLink = this.state.vidLink.trim();
      let splitVidLink = cleanVidLink.split('/');
      let clipsLocation = splitVidLink.indexOf("clips.twitch.tv");
      if (!(clipsLocation === -1)) {
        let clipId = splitVidLink[clipsLocation+1];
        let embedUrl = `https://clips.twitch.tv/embed?clip=${clipId}&autoplay=false&tt_medium=clips_embed`;
        alert('thank ye for submitting a rippy clippy');
        //can remove axios and perform fetch using fetch()
        fetch(this.props.url, {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            'embedUrl': embedUrl,
            'clipUrl': cleanVidLink,
            'clipId': clipId,
          })
        })
          .then(res => {
            this.setState({vidLink: ""});
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

export default InputField;
