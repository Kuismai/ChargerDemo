import React, { useState } from "react";


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    render() {
    return (
        <div>You are logging in now</div>
    );
    }
}

export default Login;