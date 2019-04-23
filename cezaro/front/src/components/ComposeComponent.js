import React, { Component } from 'react';

require('../styles/ComposeComponent.css');

class ComposeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Please write an essay about your favorite DOM element.',
            name: "",
            title: "",
            published: false
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({published: false});
    }

    handleSubmit(event) {

        fetch('api/add', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ author: this.state.name, title: this.state.title, content: this.state.text })
        });
        this.setState({published: true});
        event.preventDefault();
        //this.props.setMainPage();
    }

    handleTextChange(event) {
        this.setState({text: event.target.value});
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    render() {
        if(!this.state.published) {
            return (
                <div className="ComposeComponentDiv">
                    <h1> Write your post </h1>
                    <form onSubmit={this.handleSubmit}>

                        <br/>

                        <label name="composeLabel">Title</label>

                        <br/>

                        <input
                            type="text"
                            name="composeInput"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                            required
                        />

                        <br/>

                        <textarea
                            name="composeTextArea"
                            rows="30" cols="45"
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            required
                        />
                        <br/>

                        <label name="composeLabel">Your name </label>

                        <br/>

                        <input
                            type="text"
                            name="composeInput"
                            value={this.state.name}
                            onChange={this.handleNameChange}
                            required
                        />

                        <br/>

                        <input
                            name="composeSubmitButton"
                            type="submit"
                            value="Submit"/>
                    </form>


                </div>
            )
        }
        else{
            return (
                <div className="ComposeComponentDiv">
                    <h1> Your post has been published</h1>
                </div>
            );
        }
    }
}

export default ComposeComponent;