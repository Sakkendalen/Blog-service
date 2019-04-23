import React, { Component } from 'react';

require('../styles/Post.css');

class Post extends Component {

    constructor(props){
        super(props);
    }

    async componentDidMount() {

    }

    render() {

        if (this.props.content == null){

            return (
            <div className="post">
                <p>Date: {this.props.date}</p>
                <p className="authorP">Author: {this.props.author}</p>
                <p className="titleP">Title: {this.props.title}</p>
            </div>
            )
        }
        return (
            <div className="post">
                <p>Date: {this.props.date}</p>
                <p className="authorP">Author: {this.props.author}</p>
                <p className="titleP">Title: {this.props.title}</p>
                <p className="contentP">{this.props.content}</p>
            </div>
        );
    }
}

export default Post;
