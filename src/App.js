import React, { Component } from 'react';
import InputField from './components/InputField/InputField';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      videos: null,
    }
  }

  componentWillMount() {
    fetch('http://localhost:3001/api/videos')
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        this.setState({
          fetching: false,
          videos: responseJson,
        });
      })
      .catch(err => {
         console.error(err);
         throw(err);
      });
  }

  renderVideos() {
    if (!this.state.videos) {
      return (<div>loading vids</div>);
    }

    return (
      <div>
        {this.state.videos.reverse().map((video) => (
          <div class="vidcontainer" id={video['_id']}>
            <iframe src={video.url}
              width="640"
              height="360"
              frameborder="0"
              scrolling="no"
              allowfullscreen="false"></iframe>
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
          <InputField
            url="http://localhost:3001/api/videos"
            pollInterval={2000}
          />
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
