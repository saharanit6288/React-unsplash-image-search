import React from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      onLoad: false
    }
  }

  onSearchSubmit = async (term) => {
    this.setState({onLoad: true});
    const response = await axios.get('https://api.unsplash.com/search/photos',
      {
        params: {
          query: term
        },
        headers: {
          Authorization: 'Client-ID ' + process.env.REACT_APP_Unsplash_Access_Key
        }
      });
      
      this.setState({
        images: response.data.results,
        onLoad: false
      });
  }

  render() {
    return (
        <div>
          <SearchBar userSearchTerm={this.onSearchSubmit} loading={this.state.onLoad}/>
          <span className="center"><b>Found: {this.state.images.length} image(s)</b></span>
          <ImageList foundImages={this.state.images}/>
        </div>
    )
  }
}

export default App;