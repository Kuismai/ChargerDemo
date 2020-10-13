import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './search.js';
import Login from './containers/login.js';
//import { search } from '../../../Express/app';
import {DisplayMapClass} from './DisplayMapClass';



//const [hello, setHello] = useState('No data')


const callAPI = () => {
    fetch("http://localhost:9000/users")
      .then(r => r.text())
      .then(resp => {
        console.log(resp);
      });
}
/*
useEffect(() => {
  callAPI()
}, [])
*/
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
   var charger = document.getElementsByName("charger");

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
/*
   if (this.state.account !== null) {
    charger.style.display = "block";
   }
  */
 }


  /*const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
React.useEffect(() => {
    const results = locations.filter(locations =>
      locations.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);
  callAPI('halp');
*/

render () {
//callAPI();
  return (
  <div width="100%">
  <button onClick={this.displayChange}>{this.buttonText}</button>
  <div id="search"><Search dataParenttoChild = {this.state.account}/><DisplayMapClass/></div>
  <div id="login"><Login parentCallback = {this.handleCallback}/></div>
  <div id="account"></div>
  </div>
  ); }
}

export default App;
