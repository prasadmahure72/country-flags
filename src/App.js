import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter countries based on search
  const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />

      {/* Countries Grid */}
      <div className="grid-container">
        {filteredCountries.map((country, index) => (
          <div className="countryCard" key={index}>
            <img
              src={country.png}
              alt={country.common}
            />
            <p>{country.common}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
