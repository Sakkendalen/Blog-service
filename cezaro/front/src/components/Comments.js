import React, { Component } from 'react';

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentFieldText: ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
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

    render() {
        return (
            <div>
                <h1>Comments Component</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Leave your comment below</label>
                    <input type="text" name="comment" onChange={this.handleTextChange} />
                    <input type="submit" value="Comment" />
                </form>
            </div>
        );
    }

}

export default Comments;