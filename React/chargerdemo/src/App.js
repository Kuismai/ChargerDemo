import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './search.js';
import Login from './containers/login.js';

const locations = [
  /*{
    location: 'Helsinki',
    speed: 'fast'
  },*/  
  "Helsinki 1",
  "Helsinki 2",
  "Oulu",
  "Tampere",
  "Turku"
]

//const [hello, setHello] = useState('No data')

const callAPI = () => {
    fetch("http://localhost:9000/newroute")
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
return (
  <div>
  
  {this.state.contents}
  </div>
  ); }
}

export default App;
