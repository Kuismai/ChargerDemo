import React, { useEffect, useState } from 'react';
import './App.css';

function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    const data = fetch("http://localhost:9000/locations")
      .then(response => response.json())
      .then(response => {
          const results = response.filter(response =>
            response.location.toLowerCase().includes(searchTerm)
          );
        setSearchResults(results);
      }, [searchTerm]);

    })
    
  return (
    <div className="App">
      <div>
        <input
        type="text"
        placeholder="Search by location"
        value={searchTerm}
        onChange={handleChange}
        />
        <table>
          <tbody>
              <tr><td><b>Location</b></td><td><b>Speed</b></td><td><b>Status</b></td><td><b>Pricing</b></td><td><b>Code</b></td></tr>
              {searchResults.map(item => (
              <tr><td><b>{item.location}</b></td><td>{item.speed}</td><td>{item.status}</td><td>{item.price}</td><td>{item.code}</td><td><button name="charger">Charge</button></td></tr>
            ))}
          </tbody>
        </table>
     </div>
    </div>
  );
}

export default Search;
