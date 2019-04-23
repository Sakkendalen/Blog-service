import React, { Component } from 'react';

require("../styles/Login.css");

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

    async handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch('/login', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({userName: this.state.usernameFieldText, password: this.state.passwordFieldText})
            });
            const body = await response.json();

            if (body.status === 401) {
                alert("wrong password!");
            } else if (body.status === 404) {
                alert("username not found!");
            }else{
                let user = true;
                this.props.setUser(user);
            }
        }catch (e) {

        }

        //tässä vois tietty kysyä backendistä jotain
        //alert("Username : " +this.state.usernameFieldText + " Password : " +this.state.passwordFieldText);

    }

    render() {
        return(
            <div className="logdinDiv">

                <h1>Login</h1>

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <br/>
                        <label>Username</label>
                        <br/>
                        <input
                            type="text"
                            name="username"
                            value={this.state.usernameFieldText}
                            onChange={this.handleUsernameChange}
                            required
                        />

                        <br/>
                        <br/>
                        <label>Password</label>
                        <br/>
                        <input
                            type ="password"
                            name="password"
                            value={this.state.passwordFieldText}
                            onChange={this.handlePasswordChange}
                            required
                        />
                    </div>
                    <br/>
                    <input type="submit" value="Login" />
                </form>

            </div>
        );
    }
}

export default Login;