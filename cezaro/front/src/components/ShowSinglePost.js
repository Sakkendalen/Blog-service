import React, { Component } from 'react';
import Post from './Post';

require('../styles/ShowSinglePost.css');

class ShowSinglePost extends Component {

    constructor(props){
        super(props)
        this.state = {post: ""}
    }

    async componentDidMount() {
        alert("time : " +this.props.date);
        const response = await fetch('api/post/' +this.props.date );
        const body = await response.json();
        this.setState({ post: body });
    }

    async deletePost(){
        await fetch('api/delete/' +this.state.post.date);
        this.props.setMainPage();
    }

    render() {
        return (
            <div className="ShowSingePostdiv">
                <Post date = {this.state.post.date} title = {this.state.post.title} author = {this.state.post.author} content = {this.state.post.content}/>
                <button onClick={() => this.deletePost() }>Delete</button>
                <button onClick={() => this.props.modifyPostClick(this.state.post.date)}>Modify</button>
            </div>
        );
    }

}

export default ShowSinglePost