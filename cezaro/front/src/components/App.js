import React, { Component } from 'react';
import TopNavigation from './TopNavigation';
import ComposeComponent from "./ComposeComponent";
import SearchComponent from "./SearchComponent";
import ShowSinglePost from "./ShowSinglePost";
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
    this.setState({ page: <SearchComponent onClick={ (a) => this.showSinglePostClick(a)} /> });
  }

  showSinglePostClick(x) {
    //alert("show single post function from App.js " +x);
    this.setState( {page: <ShowSinglePost date={x} setMainPage={() => this.setMainPage() }/>})
  }

  setMainPage() {
    this.setState( {page: <Browse onClick={ (a) => this.showSinglePostClick(a)}/> });
  }

  topMenuClick(x) {
    if (x === "Search") {
        this.setState({page: <SearchComponent onClick={ (a) => this.showSinglePostClick(a)} /> });
    }
    if (x === "Publish") {
        this.setState({page: <ComposeComponent/> });
    }
    if (x === "Browse") {
      this.setState({page: <Browse onClick={ (a) => this.showSinglePostClick(a)}/> });
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
