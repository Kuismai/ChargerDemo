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
          console.log(r.username);
          if (valid == false) {
          if (r.username === uname && r.password === pss) {
            valid = true;
            }
          }
        });
        return valid;
    });

    if (data1) {
        console.log("valid");
        this.state.account = this.state.username;
        console.log("logged in: " + this.state.account);
        this.onTrigger();
    }

    //else { console.log("boop")}}
    
 //   .then(response => {return (response.json())}
/*    .then(response => {console.log(response)})
    .then(response => {return (response.json())}
  */  


    /*
    if (data.includes(this.state.username)) {
        console.log("beep");
    }
    else {
        console.log("boop");
    }*/
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
                value={this.state.username}
                onChange={this.handleInputChange}
                 />
            </label>
            <label>
                password
                <input
                name="password"
                type="text"
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
        return (<Account />);
    }
    }
}

export default Login;