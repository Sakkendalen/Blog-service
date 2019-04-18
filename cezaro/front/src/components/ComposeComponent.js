import React, { Component } from 'react';

require('../styles/ComposeComponent.css');

class ComposeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'Please write an essay about your favorite DOM element.',
            name: "",
            title: ""
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }

    handleSubmit(event) {

        //fetch('api/add', { method: 'post', body: ""+ this.state.name, title: "" +this.state.title + this.state.text});
        fetch('api/add', {
            method: 'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ author: this.state.name, title: this.state.title, content: this.state.text })
        });
        this.setState({text: "", name: "", title: ""});
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
        return (
            <div className="ComposeComponentDiv">
                <h1> Compose Component </h1>
                <h1> Compose Component </h1>
                <h1> Compose Component </h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        required
                    />

                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                        required
                    />

                    <label>
                        Essay:
                        <textarea
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            required
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>


            </div>
        )
    }
}

export default ComposeComponent;