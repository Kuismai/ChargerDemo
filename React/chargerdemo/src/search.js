import React, { useEffect, useState } from 'react';
import './App.css';

/*
const callAPI = () => {
  fetch("http://localhost:9000/newroute")
    .then(r => r.text())
    .then(resp => {
      return(resp);
    });
}
*/
/*
const locations = [
  {
    location: 'Helsinki 1',
    speed: 'fast',
    status: 'in use',
    price: 'premium',
    code: 'HKI1'
  },
  {
    location: 'Helsinki 2',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'HKI2'
  },
  {
    location: 'Helsinki 3',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'HKI3'
  },
  {
    location: 'Espoo 1',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'ESP1'
  },
  {
    location: 'Espoo 2',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'ESP2'
  },
  {
    location: 'Oulu 1',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'OUL1'
  },
  {
    location: 'Oulu 2',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'OUL2'
  },
  {
    location: 'Tampere',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'TAMP'
  },
  {
    location: 'Turku',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'TURK'
  },
  {
    location: 'Rovaniemi',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'ROVA'
  },
  {
    location: 'Jyväskylä',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'JYVA'
  },
  {
    location: 'Lohtaja',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'LOHT'
  },
  {
    location: 'Kotka',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'KOTK'
  },
  {
    location: 'Kajaani',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'KAJA'
  },
  {
    location: 'Kuopio',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'KUOP'
  },
  {
    location: 'Kokkola',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'KOKK'
  },
  {
    location: 'Tornio',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'TORN'
  },
  {
    location: 'Vilppula',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'VILP'
  },
  {
    location: 'Peräkylä',
    speed: 'slow',
    status: 'free',
    price: 'free',
    code: 'PERA'
  },
  {
    location: 'Tönölä',
    speed: 'fast',
    status: 'free',
    price: 'premium',
    code: 'TONO'
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
  //const locations = callAPI();
  const data = fetch("http://localhost:9000/locations")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        console.log(Array.isArray(response));
        
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
        placeholder="Search"
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
        <div>
    
        
        </div>
    </div>
  );
}

export default Search;
