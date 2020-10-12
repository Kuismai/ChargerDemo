import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './search.js';
import Login from './containers/login.js';
//import { search } from '../../../Express/app';



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
      contents: <div><button onClick={this.startLogin}>Login</button><Search /></div>
    }
  }

  startLogin = () => {
    this.setState({contents: <Login />});
  }

checkCredentials = () => {
    console.log("biip");
    var data = callAPI();
    if (data.includes(this.state.username)) {
        console.log("beep");
    }
    else {
        console.log("boop");
    }
 }

 displayChange = () => {
   var search = document.getElementById("search");
   var login = document.getElementById("login");

   if (login.style.display === "block") {
    login.style.display = "none";
  } else {
    login.style.display = "block";
  }

   if (search.style.display === "none") {
     search.style.display = "block";
   } else {
     search.style.display = "none";
   }

  
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
  <div>
  <button onClick={this.displayChange}>Login</button>
  <div id="search"><Search /></div>
  <div id="login"><Login /></div>
  </div>
  ); }
}

export default App;
