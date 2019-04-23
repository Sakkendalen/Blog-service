import React, { Component } from 'react';
import TopNavigation from './TopNavigation';
import ComposeComponent from "./ComposeComponent";
import SearchComponent from "./SearchComponent";
import ShowSinglePost from "./ShowSinglePost";
import ModifyComponent from "./ModifyComponent";
import FrontPage from "./FrontPage";
import Browse from "./Browse";
import Login from "./Login";
import '../styles/App.css'
require('../styles/App.css');


class App extends Component {

  state = {
    isLoading: false,
    posts: [],
    page: "",
    userType: false
  };

  componentDidMount() {
    //const response = await fetch('api/posts');
    //const body = await response.json();
    //this.setState({ page: <SearchComponent onClick={ (a) => this.showSinglePostClick(a)} /> });
      this.setState( {page : <FrontPage/>});
  }

  modifyPostClick(x) {
    //alert("modifyy post from app.js date : " +x);
    this.setState( {page: <ModifyComponent id ={x} setMainPage={() => this.setMainPage()}/>})
  }

  showSinglePostClick(x) {
    //alert("show single post function from App.js " +x);
    this.setState( {page: <ShowSinglePost
          id={x}
          formatTime={(e) => this.formatTime(e)}
          setMainPage={() => this.setMainPage()}
          modifyPostClick={(a) => this.modifyPostClick(a)}
          userType={this.state.userType}
      />})
  }

  setMainPage() {
    //this.setState( {page: <Browse onClick={ (a) => this.showSinglePostClick(a)}/> });
      this.setState( { page : <FrontPage/> });
  }

  setUser(userType) {   //"guest" "admin"
    alert(userType);
    this.setState({userType: userType});
  }

  formatTime(e){
    if(e !== undefined) {
      let formatted = new Date(e).toUTCString();
      console.log(typeof formatted);
      return formatted;
    }
  }

  topMenuClick(x) {
    if (x === "Search") {
        this.setState({page: <SearchComponent onClick={ (a) => this.showSinglePostClick(a)} formatTime={(e) => this.formatTime(e)} /> });
    }
    if (x === "Publish") {
        this.setState({page: <ComposeComponent setMainPage={() => this.setMainPage()}/> });
    }
    if (x === "Browse") {
      this.setState({page: <Browse onClick={ (a) => this.showSinglePostClick(a)} formatTime={(e) => this.formatTime(e)}/> });
    }
    if (x === "Login") {
      this.setState({page: <Login setUser={(a) => this.setUser(a)}/> });
    }
    if (x === "Logout") {
      this.setState({page: <FrontPage/>, userType: false});
    }
  }

  render() {
    const {posts, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
        <div className="App">
          <TopNavigation onClick={ (a) => this.topMenuClick(a)} userType={this.state.userType} />
            {this.state.page}
        </div>
    );
  }
}

export default App;
