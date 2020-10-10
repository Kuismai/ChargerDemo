import React, { useEffect, useState } from 'react';
import './App.css';

const locations = [
  {
    location: 'Helsinki 1',
    speed: 'fast',
    status: 'in use',
    price: 'premium'
  },
  {
    location: 'Helsinki 2',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Helsinki 3',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Espoo 1',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Espoo 2',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Oulu 1',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Oulu 2',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Tampere',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Turku',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Rovaniemi',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Jyväskylä',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Lohtaja',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Kotka',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Kajaani',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Kuopio',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Kokkola',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Tornio',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Vilppula',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  },
  {
    location: 'Peräkylä',
    speed: 'slow',
    status: 'free',
    price: 'free'
  },
  {
    location: 'Tönölä',
    speed: 'fast',
    status: 'free',
    price: 'premium'
  }
]

//const [hello, setHello] = useState('No data')

/*
useEffect(() => {
  callAPI()
}, [])
*/
function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
React.useEffect(() => {
    const results = locations.filter(locations =>
      locations.location.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      
        <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
     <table>
         <tr><td><b>Location</b></td><td><b>Speed</b></td><td><b>Status</b></td><td><b>Pricing</b></td></tr>
         {searchResults.map(item => (
          <tr><td><b>{item.location}</b></td><td>{item.speed}</td><td>{item.status}</td><td>{item.price}</td></tr>
        ))}
        </table>
    
    </div>
  );
}

export default Search;
