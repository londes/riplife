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
          url: 'https://clips.twitch.tv/embed?clip=DaintyGlamorousNightingaleMikeHogu&autoplay=false&tt_medium=clips_embed',
          description: 'ziz ded'
        },
        video2 : {
          name: 'Rip again',
          url: 'https://www.youtube.com/embed/9IxXHFPohE4',
          description: 'best deaths'
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
          <h2>{this.state.videos.video1.name}</h2>
          <iframe src={this.state.videos.video1.url}
            width="640"
            height="360"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"></iframe>
          <h3>{this.state.videos.video1.description}</h3>
        </div>
        <div class="vidcontainer">
          <h2>{this.state.videos.video2.name}</h2>
          <iframe
            src={this.state.videos.video2.url}
            width="640"
            height="360"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"></iframe>
            <h3>{this.state.videos.video2.description}</h3>
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
