import React, { Component } from 'react';

class Login extends Component{

    constructor(props){
        super(props);

        this.state = {
            usernameFieldText: "",
            passwordFieldText: "",
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({usernameFieldText: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({passwordFieldText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        //tässä vois tietty kysyä backendistä jotain
        //alert("Username : " +this.state.usernameFieldText + " Password : " +this.state.passwordFieldText);
        let user = true;
        this.props.setUser(user);
    }

    render() {
        return(
            <div>
                <h1>LOgin</h1>
                <h1>LOgin</h1>
                <h1>LOgin</h1>
                <h1>LOgin</h1>
                <h1>LOgin</h1>
                <h1>LOgin</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.usernameFieldText}
                            onChange={this.handleUsernameChange} />
                        <label>Password</label>
                        <input
                            type ="text"
                            name="password"
                            value={this.state.passwordFieldText}
                            onChange={this.handlePasswordChange} />
                    </div>
                    <input type="submit" value="Login" />
                </form>

            </div>
        );
    }
}

export default Login;