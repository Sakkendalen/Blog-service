import React, { Component } from 'react';
import Post from './Post';

require('../styles/SearchComponent.css');

class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "",
            isLoading: false,
            posts: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
    }

    async handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('api/search/' +this.state.searchValue );
        const body = await response.json();
        this.setState({ posts: body });
    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    render() {
        return (
            <div className="SearchComponentDiv">
                <h1> Search </h1>

                <form onSubmit={this.handleSubmit}>

                    <input
                        type="text" value={this.state.searchValue}
                        name="name" onChange={this.handleChange}
                        required
                    />

                    <input type="submit" value="search" />
                </form>
                <br></br>

                {this.state.posts.map(post =>
                    <div key={post.id} onClick={ () => this.props.onClick( post.id ) }>
                        <Post id = {post.id} date = {this.props.formatTime(post.date)} author = {post.author} title = {post.title}/>
                        <br></br>
                    </div>
                )}

            </div>
        );
    }
}

export default SearchComponent;