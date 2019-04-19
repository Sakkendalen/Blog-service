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
        this.formattedTime = this.formattedTime.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('api/post/' +this.props.id );
        const body = await response.json().then();
        this.setState({ post: body });

    }

    async deletePost(){
        await fetch('api/delete/' +this.state.post.id);
        this.props.setMainPage();
    }

    async nextPost() {
        const response = await fetch('api/nextpost/' +this.state.post.id);
        const body = await response.json();
        this.setState({ post: body });
    }

    async prevPost() {
        const response = await fetch('api/prevpost/' +this.state.post.id);
        const body = await response.json();
        this.setState({ post: body });
    }


    formattedTime(){
        if(this.state.post.date !== undefined) {
            let formatted = new Date(this.state.post.date).toUTCString();
            console.log(typeof formatted);
            return formatted;
        }
    }

    render() {
        return (
            <div className="ShowSingePostdiv">
                <Post
                    id = {this.state.post.id}
                    date = {this.props.formatTime(this.state.post.date)}
                    title = {this.state.post.title}
                    author = {this.state.post.author}
                    content = {this.state.post.content}/>
                <button onClick={() => this.prevPost() }>Previous Post</button>
                {this.props.userType
                    ? <button onClick={() => this.deletePost() }>Delete</button>
                    : ""
                }
                {this.props.userType
                    ? <button onClick={() => this.props.modifyPostClick(this.state.post.id)}>Modify</button>
                    : ""
                }
                <button onClick={() => this.nextPost() }>Next Post</button>



                <Comments postID={this.props.id} userType={this.props.userType}/>
            </div>
        );
    }

}

export default ShowSinglePost