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
    this.setState( {page: <ShowSinglePost id={x} setMainPage={() => this.setMainPage()} modifyPostClick={(a) => this.modifyPostClick(a)}/>})
  }

  setMainPage() {
    //this.setState( {page: <Browse onClick={ (a) => this.showSinglePostClick(a)}/> });
      this.setState( { page : <FrontPage/> });
  }

  setUser(userType) {   //"guest" "admin"
    alert(userType);
    this.setState({userType: userType});
  }

  topMenuClick(x) {
    if (x === "Search") {
        this.setState({page: <SearchComponent onClick={ (a) => this.showSinglePostClick(a)} /> });
    }
    if (x === "Publish") {
        this.setState({page: <ComposeComponent setMainPage={() => this.setMainPage()}/> });
    }
    if (x === "Browse") {
      this.setState({page: <Browse onClick={ (a) => this.showSinglePostClick(a)}/> });
    }
    if (x === "Login") {
      this.setState({page: <Login setUser={(a) => this.setUser(a)}/> });
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
            { this.state.userType
              ? <h1>admin</h1>
              : <h1>guest</h1>
            }
        </div>
    );
  }
}

export default App;
