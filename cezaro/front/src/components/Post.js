import React, { Component } from 'react';

require('../styles/Post.css');

class Post extends Component {

    constructor(props){
        super(props);
        this.state = {content: ''};
    }

    async componentDidMount() {

    }

    render() {

        if (this.state.content === ''){

            return (
            <div className="post">
                <p>Date: {this.props.date}</p>
                <p>Author: {this.props.author}</p>
                <p>Title: {this.props.title}</p>
                <br></br>
            </div>
            )
        }
        return (
            <div className="post">
                <p>Date: {this.props.date}</p>
                <p>Author: {this.props.author}</p>
                <p>Title: {this.props.title}</p>
                <p>Content: {this.props.content}</p>
                <br></br>
            </div>
        );
    }
}

export default Post;
