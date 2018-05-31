import React, { Component } from 'react';
import InputField from './components/InputField/InputField';
import ImgFillerContainer from './components/ImgFillerContainer/ImgFillerContainer';
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
    this.fetchVideos();
    setInterval(() => {
      this.fetchVideos();
    }, 5000);
  }

  fetchVideos () {
    fetch('http://localhost:3001/api/last5rips')
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
  }


  renderVideos() {
    if (!this.state.videos) {
      return (<div>loading vids</div>);
    }

    return (
      <div className="vid-container">
        {this.state.videos.map((video) => (
          <div className="vid-wrapper">
            <iframe src={video.embedUrl}
              width="640"
              height="360"
              frameBorder="0"
              scrolling="no"
              allowFullScreen="false"></iframe>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" id="header">
          <h2>rip clips</h2>
          <InputField
            url="http://localhost:3001/api/videos"
          />
        </div>
        <div className="content-wrapper">
          <ImgFillerContainer
            containerWidth={document.body.scrollWidth}
            containerHeight={document.body.scrollHeight}
            howMany={200}/>
          {this.renderVideos()}
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
