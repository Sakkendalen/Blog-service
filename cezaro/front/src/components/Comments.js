import React, { Component } from 'react';

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentFieldText: "",
            name: ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

    }

    handleSubmit(event) {
        //fetch
        event.preventDefault();
    }

    handleTextChange(event) {
        this.setState({commentFieldText: event.target.value});
    }

    handleNameChange(event) {
        this.setState( {name: event.target.value});
    }

    render() {
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
            </div>
        );
    }

}

export default Comments;