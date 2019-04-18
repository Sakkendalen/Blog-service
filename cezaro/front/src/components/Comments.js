import React, { Component } from 'react';
import Comment from "./Comment";
import Post from "./Browse";

class Comments extends Component {

    constructor(props) {
        super(props);
        console.log("Kun Comments constructor  ID :" +this.props.postID);
        this.state = {
            postID: this.props.postID,
            commentFieldText: "",
            name: "",
            comments: []
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('comment/getComments/' +this.props.postID);
        const body = await response.json();
        this.setState({ comments: body});

        console.log("print fetch :" );
        for (let x in body) {
            console.log(body[x].pseudonym);
        }
    }

    handleSubmit(event) {
        //fetch
        fetch('comment/add', {
            method: 'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pseudonym: this.state.name, content: this.state.commentFieldText, postId: this.props.postID})
        });
        event.preventDefault();
    }

    handleTextChange(event) {
        this.setState({commentFieldText: event.target.value});
    }

    handleNameChange(event) {
        this.setState( {name: event.target.value});
    }

    likeButton(commentId) {
        console.log("likebutton " +commentId);
        fetch('comment/like/' +commentId, {
            method: 'post'
        });
    }


    /*{this.state.comments.map(comment =>
        <div key={comment.id}>
            <Comment id = {comment.id} date = {comment.datetime} pseudonym = {comment.pseudonym} content = {comment.content} />
        </div>
    )}*/

    render() {
        console.log("ID kun commentS render alkaa : " +this.state.postID);
        return (
            <div>
                <h1>Comments Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Leave your comment below</label>
                    <input type="text" name="comment" onChange={this.handleTextChange} />
                    <label>Your name :</label>
                    <input type ="text" name="name" onChange={this.handleNameChange} />
                    <input type="submit" value="Comment" />
                </form>
                <br/>

                {this.state.comments.map(comment =>
                    <div key={comment.id}>
                        <Comment
                            id = {comment.id}
                            datetime = {comment.datetime}
                            pseudonym = {comment.pseudonym}
                            content = {comment.content} />
                        <div onClick={() => this.likeButton(comment.id) }>Like Button</div>
                        <span>likes : {comment.likes}</span>
                        <br/>
                    </div>
                )}
            </div>

        );
    }

}

export default Comments;