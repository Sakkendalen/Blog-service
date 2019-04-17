import React, { Component } from 'react';
import Post from './Post';

require('../styles/Browse.css');

class Browse extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            posts: []
        };
    }

    async componentDidMount() {
        const response = await fetch('api/posts');
        const body = await response.json();
        this.setState({ posts: body, isLoading: false });
    }

    render(){
        return(
            <div className="Browsediv">
                <h2>Post List</h2>
                {this.state.posts.map(post =>
                    <div key={post.id} onClick={ () => this.props.onClick( post.id ) }>
                        <Post id = {post.id} date = {post.date} author = {post.author} title = {post.title} />

                        <br></br>
                    </div>
                )}
            </div>
        );
    }
}

export default Browse