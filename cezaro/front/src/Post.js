import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

    async componentDidMount() {

    }

    render() {

        return (
            <div className="post">
                <p>Date: {this.props.fecthPost.date}</p>
                <p>Author: {this.props.fecthPost.author}</p>
                <p>Title: {this.props.fecthPost.title}</p>
                <p>Content: {this.props.fecthPost.content}</p>
                <br></br>
            </div>
        );
    }
}

export default Post;
