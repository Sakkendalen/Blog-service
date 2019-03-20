import React, { Component } from 'react';
import './TopNavigation.css';

class TopNavigation extends Component {

  componentDidMount() {

  }

  render() {
    return (
    <div className="TopNavDiv">
      <ul class="TopNavUL">
        <li>Browse</li>
        <li>Search</li>
        <li>Delete</li>
        <li>Modify</li>
        <li>Add</li>
      </ul>
    </div>
    )
  }
}

export default TopNavigation;