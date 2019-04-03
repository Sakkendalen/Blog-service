import React, { Component } from 'react';
import Browse from "./Browse";
import Post from './Post';

require('../styles/SearchComponent.css');

class SearchComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: "Search",
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
                <h1> Search Component </h1>

                <form onSubmit={this.handleSubmit}>

                    <label>Search</label>
                    <input type="text" value={this.state.searchValue} name="name" onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>

                {this.state.posts.map(post =>
                    <div key={post.date} onClick={ () => this.props.onClick( post.date ) }>
                        <Post date = {post.date} author = {post.author} title = {post.title}/>
                        <br></br>
                    </div>
                )}

            </div>
        );
    }
}

export default SearchComponent;