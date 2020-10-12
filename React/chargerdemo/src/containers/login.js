import React, { useState } from "react";

const callAPI = () => {
    fetch("http://localhost:9000/users")
      .then(response => response.json())
      .then(response => {console.log(response)})
      .then(response => {return (response)}
      )
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
    let uname = this.state.username;
    let pss = this.state.password;
    event.preventDefault();
    console.log("biip");
    var data1 = fetch("http://localhost:9000/users")
    .then(response => response.json())
    .then(response => {
      response.map((r) => {
          console.log(r.username);
          if (r.username === uname && r.password === pss) {
            console.log("true");
            return true;
            
            }
        else {console.log("false");}});
        console.log(response);
    })
    .then(response => {
        
    })
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