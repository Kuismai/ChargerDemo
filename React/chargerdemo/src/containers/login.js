import React, { useState } from "react";
import App from "../App";
import Account from "./Account";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            account : ''
        };

    this.handleInputChange =
    this.handleInputChange.bind(this);

    }

onTrigger = (event) => {
    this.props.parentCallback(this.state.account);
}

checkCredentials = (event) => {
    let uname = this.state.username;
    let pss = this.state.password;
    event.preventDefault();
    console.log("biip");
    var valid = false;

    var data1 = fetch("http://localhost:9000/users")
    .then(response => response.json())
    .then(response => {
        response = response.map((r) => {
          if (valid == false) {
            if (r.username === uname && r.password === pss) {
                valid = true;
            }
          }
        });

      return valid;
    });

    if (data1) {
        this.state.account = this.state.username;
        this.onTrigger();
    }

    
}

handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
}

render() {
        if (this.state.account === "") {
            return (
                <form onSubmit={this.checkCredentials}>
                    <label>
                        Username
                        <input
                        name="username"
                        type="text"
                        placeholder="e.g. test1 OR user1"
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        />
                    </label>
                    <label>
                        password
                        <input
                        name="password"
                        type="text"
                        placeholder="e.g. test2 OR testing"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Log In" />
                </form>
            );
        }
        else {
            return (<Account dataParenttoChild = {this.state.account}/>);
        }
    }
}

export default Login;