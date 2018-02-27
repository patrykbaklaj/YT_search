import React, { Component } from 'react';
import _ from 'lodash';
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
  
    this.videoSearch('rs3');
    
  }

  videoSearch(query) {
    YTSearch({key: API_KEY, term: query}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  
  render(){
    const videoSearch = _.debounce( (query) => { this.videoSearch(query) }, 400 );
    
    
    return (
      <div className='container-fluid row '>
        <SearchBar onSearchQueryChange={ videoSearch }/>
        <VideoDetails video={ this.state.selectedVideo }/>
        <VideoList 
          videos={ this.state.videos }
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
        />
      </div>
    );
  }
};

export default App;
