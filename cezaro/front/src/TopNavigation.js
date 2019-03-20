import React, { Component } from 'react';
import './TopNavigation.css';
import SearchComponent from './SearchComponent';
import ComposeComponent from "./ComposeComponent";

class TopNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {show: "SearchComponent"};
  }

  componentDidMount() {

  }

  setCompose() {

  }

  setBarState(a) {
    this.setState({ show: a })
    console.log("this ");
  }

  render() {
    console.log(this.state.show)
    let a = <SearchComponent/>;
    if (this.state.show === "SearchComponent") {
      console.log("eka");
      a = <SearchComponent/>;
    } else {
      console.log("toka");
      a = <ComposeComponent/>;
    }

    return (
    <div className="TopNavDiv">
      <ul className="TopNavUL">
        <li>Browse</li>
        <li> <button type="submit" onClick={() => { this.setBarState("SearchComponent") }}>Search</button> </li>
        <li>Delete</li>
        <li>Modify</li>
        <li> <button type="submit" onClick={() => { this.setBarState("ComposeComponent") }}>Search</button> </li>
      </ul>
      {a}
    </div>
    )
  }
}

export default TopNavigation;