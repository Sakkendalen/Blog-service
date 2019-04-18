import React, { Component } from 'react';

require('../styles/ModifyComponent.css');

class ModifyComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: "",
            name: "",
            title: ""}

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {

        const response = await fetch('api/post/' +this.props.id );
        const body = await response.json();
        this.setState({ text: body.content, name: body.author, title: body.title });
    }

    handleSubmit(event) {

        event.preventDefault();

        //fetch('api/add', { method: 'post', body: ""+ this.state.name, title: "" +this.state.title + this.state.text});
        fetch('api/update/' + this.props.id, {
            method: 'post',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ author: this.state.name, title: this.state.title, content: this.state.text })
        });

        this.props.setMainPage();
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
        return(
            <div className={"ModifyComponentDiv"}>
                <form onSubmit={this.handleSubmit}>

                    <label>Author</label>
                    <input
                        value={this.state.name}
                        type="text"
                        name="name"
                        onChange={this.handleNameChange}
                        required
                    />

                    <label>Title</label>
                    <input
                        value={this.state.title}
                        type="text"
                        name="title"
                        onChange={this.handleTitleChange}
                        required
                    />

                    <label>
                        <textarea
                            value={this.state.text}
                            onChange={this.handleTextChange}
                            required
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default ModifyComponent

