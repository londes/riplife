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
        debugger;
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
      });
  }

  renderVideos() {
    if (this.state.inventory) {
      return (
        <div>
        {this.state.inventory.forEach(video) => {
          
        }}
        {/* <div class="vidcontainer">
          <h2>{this.state.inventory.video1.name}</h2>
          <iframe src={this.state.inventory.video1.url}
            width="640"
            height="360"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"></iframe>
          <h3>{this.state.inventory.video1.description}</h3>
        </div>
        <div class="vidcontainer">
          <h2>{this.state.inventory.video2.name}</h2>
          <iframe
            src={this.state.inventory.video2.url}
            width="640"
            height="360"
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"></iframe>
          <h3>{this.state.inventory.video2.description}</h3>
        </div> */}
        </div>
      );
    }
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
