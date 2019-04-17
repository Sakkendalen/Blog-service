import React, { Component } from 'react';

class Comment extends Component {

    constructor(props){
        super(props);
    }

    async componentDidMount() {

    }

    render() {

        return (
            <div className="comment">
                <p>Käyttäjä {this.props.pseudonym} kommentoi {this.props.datetime}</p>
                <p>"{this.props.content}"</p>
                <br/>
            </div>
        );

        /*
        if (this.props.content == null){

            return (
                <div className="post">
                    <p>Date: tyhja</p>
                    <p>Author: tyhja</p>
                    <p>Title: tyhja</p>
                    <br></br>
                </div>
            )
        }
        return (
            <div className="post">
                <p>Date: tyhja</p>
                <p>Author: tyhja</p>
                <p>Title: tyhja</p>
                <br></br>
            </div>
        );*/
    }
}

export default Comment;
