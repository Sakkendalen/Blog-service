import React, { Component } from 'react';
import './App.css';

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
            <div className="App-intro">
              <h2>Post List</h2>
              {posts.map(post =>
                  <div key={post.date}>
                    <p>Date: {post.date}</p>
                    <p>Author: {post.author}</p>
                    <p>Title: {post.title}</p>
                    <p>Content: {post.content}</p>
                    <br></br>
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}

export default App;
