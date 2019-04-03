import React, { Component } from 'react';
import Post from './Post';

class ShowSinglePost extends Component {

    render() {
        return (
            <div>
                <h2>Showing single post</h2>
                <h2>Showing single post</h2>
                <h2>Showing single post</h2>
                <h2>Showing single post</h2>
                <h2>Showing single post</h2>
                <h2>{this.props.date}</h2>

            </div>
        );
    }

}

export default ShowSinglePost