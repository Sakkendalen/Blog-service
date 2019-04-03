import React, { Component } from 'react';
import Post from './Post';

class ShowSinglePost extends Component {

    constructor(props){
        super(props)
        this.state = {post: ""}
    }

    async componentDidMount() {
        const response = await fetch('api/post/' +this.props.date );
        const body = await response.json();
        this.setState({ post: body });
    }

    deletePost(){

    }

    render() {
        return (
            <div className="ComposeComponentDiv">
                <Post date = {this.state.post.date} title = {this.state.post.title} author = {this.state.post.author} content = {this.state.post.content}/>
                <button onClick={this.deletePost}>Delete</button>
            </div>
        );
    }

}

export default ShowSinglePost