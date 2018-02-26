import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details'

const API_KEY = 'AIzaSyCHNjrWynjNmVtuYvf5_QqimkQguS5PeW0';



class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({key: API_KEY, term: 'audi'}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
//      in ES6 same as: this.setState({videos: videos});
    });
  }

  render(){
    
    return (
      <div className='container-fluid d-flex flex-column align-items-center'>
       <h2>Name </h2>
        <SearchBar />
        <VideoDetails video={ this.state.selectedVideo }/>
        <VideoList videos={ this.state.videos }/>
      </div>
    );
  }
};

export default App;
