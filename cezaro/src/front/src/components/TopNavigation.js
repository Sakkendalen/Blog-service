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
  }

  render() {
    let a = <SearchComponent/>;
    if (this.state.show === "SearchComponent") {
      a = <SearchComponent/>;
    } else {
      a = <ComposeComponent/>;
    }

    return (
    <div className="TopNavDiv">
      <h1>Cezaro Blog</h1>
      <ul className="TopNavUL">
        <li> <button className="topButt" type="submit" onClick={ () => this.props.onClick( "Browse" ) }>Browse</button> </li>
        <li> <button className="topButt" type="submit" onClick={ () => this.props.onClick( "Search" ) }>Search</button> </li>
        { this.props.userType
            ? <li> <button className="topButt" type="submit" onClick={ () => this.props.onClick( "Publish" ) }>Publish</button> </li>
            : ''
        }
        { this.props.userType
            ? <li> <button className="topButt" type="submit" onClick={ () => this.props.onClick( "Logout" ) }>Logout</button></li>
            : <li> <button className="topButt" type="submit" onClick={ () => this.props.onClick( "Login" ) }>Login</button></li>
        }

      </ul>
    </div>
    )
  }
}

export default TopNavigation;