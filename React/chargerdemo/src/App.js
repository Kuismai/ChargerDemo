import React from 'react';
import './App.css';

const locations = [
  "Helsinki",
  "Oulu",
  "Tampere"
]

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
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
     <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
        </ul>
    
    </div>
  );
}

export default App;
