import React, { useState } from "react";

const callAPI = () => {
    fetch("http://localhost:9000/users")
      .then(r => r.text())
      .then(resp => {
        return JSON.stringify(resp);
      });
}

const checkCredentials = () => {
    console.log("biip");
    var data = callAPI();
    if (data.includes(this.state.username)) {
        console.log("beep");
    }
    else {
        console.log("boop");
    }
 }


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
     };

    this.handleInputChange =
    this.handleInputChange.bind(this);

}

checkCredentials = (event) => {
    
    event.preventDefault();
    console.log("biip");
    var data = callAPI();
    console.log(Array.isArray(data));
    console.log(data);
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
}

export default Login;