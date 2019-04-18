import React, { Component } from 'react';
import Post from './Post';
import Comments from './Comments';

require('../styles/ShowSinglePost.css');

class ShowSinglePost extends Component {

    constructor(props){
        super(props)
        this.state = {
            post: "",
            comments: []
        }
    }

    async componentDidMount() {
        const response = await fetch('api/post/' +this.props.id );
        const body = await response.json();
        this.setState({ post: body });
    }

    async deletePost(){
        await fetch('api/delete/' +this.state.post.id);
        this.props.setMainPage();
    }

    render() {
        return (
            <div className="ShowSingePostdiv">
                <Post
                    id = {this.state.post.id}
                    date = {this.state.post.date}
                    title = {this.state.post.title}
                    author = {this.state.post.author}
                    content = {this.state.post.content}/>
                <button onClick={() => this.deletePost() }>Delete</button>
                <button onClick={() => this.props.modifyPostClick(this.state.post.id)}>Modify</button>
                <Comments postID={this.props.id}/>
            </div>
        );
    }

}

export default ShowSinglePost