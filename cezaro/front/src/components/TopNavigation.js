import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import ComposeComponent from "./ComposeComponent";

require('../styles/TopNavigation.css');

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
        <li> <button type="submit" onClick={ () => this.props.onClick( "Browse" ) }>Browse</button> </li>
        <li> <button type="submit" onClick={ () => this.props.onClick( "Search" ) }>Search</button> </li>
        <li> <button type="submit" onClick={ () => this.props.onClick( "Publish" ) }>Publish</button> </li>
        <li>Delete</li>
        <li>Modify</li>
      </ul>
    </div>
    )
  }
}

export default TopNavigation;