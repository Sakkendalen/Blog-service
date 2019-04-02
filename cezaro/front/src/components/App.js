import React, { Component } from 'react';
import TopNavigation from './TopNavigation';
import LeftPanel from './LeftPanel';
import Post from './Post';
import ComposeComponent from "./ComposeComponent";
import SearchComponent from "./SearchComponent";
import Browse from "./Browse";

require('../styles/App.css');


class App extends Component {

  state = {
    isLoading: false,
    posts: [],
      page: ""
  };

  componentDidMount() {
    //const response = await fetch('api/posts');
    //const body = await response.json();
    this.setState({ page: <SearchComponent/> });
  }

  topMenuClick(x) {
    if (x === "Search") {
        this.setState({page: <SearchComponent/> });
    }
    if (x === "Publish") {
        this.setState({page: <ComposeComponent/> });
    }
    if (x === "Browse") {
      this.setState({page: Browse/> });
    }
  }

  render() {
    const {posts, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div className="App">
          <TopNavigation onClick={ (a) => this.topMenuClick(a)} />
            {this.state.page}
        </div>
    );
  }
}

export default App;
