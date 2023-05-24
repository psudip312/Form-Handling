import React, { useState, useEffect } from 'react';
function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    searchData();
  }, []);
  const searchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setResults(data.slice(0, 10)));
  };
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = () => {
    const filteredResults = results.filter((user) =>
      user.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setResults(filteredResults);
  };
  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.length === 0 ? (
          <li>No results found</li>
        ) : (
          results.map((user) => <li key={user.id}>{user.name}</li>)
        )}
      </ul>
    </div>
  );
}
export default Home;