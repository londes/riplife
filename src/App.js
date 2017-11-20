import React, { Component } from 'react';
import InputField from './components/InputField/InputField';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      videos: null,
      //twitchvids: null,
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
          videos: responseJson,
        });
      })
      .catch(err => {
         console.error(err);
         throw(err);
      });

    // fetch('https://api.twitch.tv/kraken/clips/top?limit=10&game=Path%20Of%20Exile&trending=true', {
    //   headers: {
    //     'Client-ID': 'ousqrlk5qmygv0cm132y6mq7oehpx4',
    //     'Accept': 'application/vnd.twitchtv.v5+json',
    //   },
    //   method: 'GET',
    // })
    //   .then(response => {
    //     console.log(response);
    //     debugger;
    //     return response.json();
    //   })
    //   .then(responseJson => {
    //     console.log(responseJson);
    //     this.setState({
    //       twitchvids: responseJson,
    //     })
    //     debugger;
    //   })
    //   .catch(err => {
    //      console.error(err);
    //      throw(err);
    //   });
  }

  renderVideos() {
    if (!this.state.videos) {
      return (<div>loading vids</div>);
    }

    return (
      <div>
        {this.state.videos.map((video) => (
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
          <h2>rip clips</h2>
          <InputField/>
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
