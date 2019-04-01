import React, { Component } from 'react';
import TopNavigation from './TopNavigation';
import LeftPanel from './LeftPanel';
import Post from './Post';

require('../styles/App.css');

class App extends Component {
  state = {
    isLoading: true,
    posts: []
  };

  async componentDidMount() {
    const response = await fetch('api/posts');
    const body = await response.json();
    this.setState({ posts: body, isLoading: false });
  }

  render() {
    const {posts, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div className="App">
          <header className="App-header">
          <TopNavigation />
          <LeftPanel />
            <div className="App-intro">
              {posts.map(post =>
                  <Post fecthPost={post}/>
              )}
            </div>
          </header>
        </div>
    );
  }
}

export default App;
