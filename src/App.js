import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      inventory: null,
    }
  }

  componentWillMount() {
    fetch('http://localhost:8000/videos')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          fetching: false,
          inventory: responseJson,
        });
      })
      .catch(err => {
         console.error(err);
         throw(err);
      });

    fetch('https://api.twitch.tv/kraken/clips/top?limit=10&game=Overwatch&trending=true')
      .then(response => {
        console.log(response);
        debugger;
        return response.json();
      })
      // var httpRequest = new XMLHttpRequest();
      // httpRequest.addEventListener('load', clipsLoaded);
      // httpRequest.open('GET', 'https://api.twitch.tv/kraken/clips/top?limit=10&game=Overwatch&trending=true');
      // httpRequest.setRequestHeader('Client-ID', 'uo6dggojyb8d6soh92zknwmi5ej1q2');
      // httpRequest.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
      // httpRequest.send();
  }

  renderVideos() {
    if (!this.state.inventory) {
      return (<div>loading vids</div>);
    }

    return (
      <div>
        {this.state.inventory.map((video) => (
          <div class="vidcontainer">
            <h2>{video.name}</h2>
            <iframe src={video.url}
              width="640"
              height="360"
              frameborder="0"
              scrolling="no"
              allowfullscreen="false"></iframe>
            <h3>{video.description}</h3>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>RIP YOU NUBS</h2>
        </div>
        {this.renderVideos()}
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
