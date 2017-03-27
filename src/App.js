import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos : {
        video1 : {
          name: 'Rip Video 123',
          url: 'https://www.youtube.com/embed/m1S_BU3i6Uk?rel=0&amp;showinfo=0',
          description: 'malachai act 4 normal rip'
        }
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div class="vidcontainer">
          <iframe class="video" src={this.state.videos.video1.url} frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

/*addNewSuggestion = (titleToAdd, videoURLtoAdd) => {
    let newSuggestion = {
      title: titleToAdd,
      videoURL: videoURLtoAdd
    };
    this.setState(newSuggestion).then(()=>{});
  }*/

export default App;
