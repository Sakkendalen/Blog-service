import React, { Component } from 'react';

require('../styles/SearchComponent.css');

class SearchComponent extends Component {

    this.state = {
        searchValue: 'search',
    };

    componentDidMount() {

    }

    handleSubmit(event) {

    }

    handleChange(event) {
        this.setState({searchValue: event.target.value});
    }

    render() {
        return (
            <div className="SearchComponentDiv">
                <h1> Search Component </h1>
                <h1> Search Component </h1>
                <h1> Search Component </h1>
                <h1> Search Component </h1>
                <h1> Search Component </h1>

                <form onSubmit={this.handleSubmit}>

                    <label>Search</label>
                    <input type="text" name="name" onChange={this.handleChange} />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default SearchComponent;