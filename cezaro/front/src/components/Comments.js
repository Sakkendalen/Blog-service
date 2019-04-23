import React, { Component } from 'react';
import Comment from "./Comment";
import Post from "./Browse";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postID: this.props.postID,
            commentFieldText: "",
            name: "",
            comments: [],
            liked: []
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('comment/getComments/' +this.state.postID);
        const body = await response.json();
        this.setState({ comments: body});
    }

    async update() {
        const response = await fetch('comment/getComments/' +this.state.postID);
        const body = await response.json();
        this.setState({ comments: body, postID: this.props.postID});
    }

    async updateWithId(x) {
        const response = await fetch('comment/getComments/' +x);
        const body = await response.json();
        this.setState({ comments: body, postID: x});
    }

    async handleSubmit(event) {

        event.preventDefault();
        alert("tallennetaan id:lle : " +this.state.postID);
        this.setState({commentFieldText: "", name: ""});
        //fetch
        await fetch('comment/add', {
            method: 'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pseudonym: this.state.name, content: this.state.commentFieldText, postId: this.state.postID})
        });
        this.update();
    }

    handleTextChange(event) {
        this.setState({commentFieldText: event.target.value});
    }

    handleNameChange(event) {
        this.setState( {name: event.target.value});
    }

    async deletePost(postID) {
        await fetch('comment/delete/' +postID, {
            method: 'post',
            headers:{
                "Content-Type": "application/json"
            }
        });
        this.update();
    }

    async likeButton(commentId) {
        let likesArray = this.state.liked;

        if (!likesArray.includes(commentId)) {
            await fetch('comment/like/' +commentId, {
                method: 'post'
            });
            likesArray.push(commentId);
            this.setState({liked: likesArray});
        }

        this.update();
    }


    /*{this.state.comments.map(comment =>
        <div key={comment.id}>
            <Comment id = {comment.id} date = {comment.datetime} pseudonym = {comment.pseudonym} content = {comment.content} />
        </div>
    )}*/

    render() {
        return (
            <div>
                <h1>Comments</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Leave your comment below</label>
                        <br/>
                        <input
                            type="text"
                            name="comment"
                            value={this.state.commentFieldText}
                            onChange={this.handleTextChange}
                            required
                            />
                            <br/>
                        <label>Your name :</label>
                        <br/>
                        <input
                            type ="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            required
                        />
                        <br/>
                    </div>
                    <input className="submitCommentButton" type="submit" value="Comment" />
                </form>
                <br/>

                {this.state.comments.map(comment =>
                    <div className ="oneComment" key={comment.id}>
                        <Comment
                            id = {comment.id}
                            datetime = {this.props.formatTime(comment.datetime)}
                            pseudonym = {comment.pseudonym}
                            content = {comment.content} />
                            <div>Total likes : {comment.likes}</div>
                        <button className="likeButton" onClick={() => this.likeButton(comment.id) }>Like this comment</button>
                        {this.props.userType
                            ? <button onClick={() => this.deletePost(comment.id)}>Delete Comment</button>
                                : ""
                        }
                        <br/>
                    </div>
                )}
            </div>

        );
    }

}

export default Comments;