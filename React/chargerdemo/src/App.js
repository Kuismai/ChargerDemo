import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './search.js';
import Login from './containers/login.js';
import {DisplayMapClass} from './DisplayMapClass';
import Legend from './legend.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null
    }
  }

  handleCallback = (childData) =>{
    this.setState({account: childData})
}

buttonText = "Account";

displayChange = () => {
   var search = document.getElementById("search");
   var login = document.getElementById("login");
   var charger = document.getElementsByName("Charge");

  if (login.style.display === "block") {
    login.style.display = "none";
  } else {
    login.style.display = "block";
    this.buttonText = "Search";
  }

  if (search.style.display === "none") {
     search.style.display = "flex";
     this.buttonText = "Account";
  } else {
     search.style.display = "none";
     this.buttonText = "Search";
  }

}


render () {
  return (
    <div width="100%">
      <button onClick={this.displayChange}>{this.buttonText}</button>
      <div id="search"><Search/><DisplayMapClass/><Legend /></div>
      <div id="login"><Login parentCallback = {this.handleCallback} /></div>
      <div id="account"></div>
    </div>
  ); 
}

}

export default App;
