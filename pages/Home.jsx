import React, { useState, useEffect } from "react";

function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [newResult, setNewResult] = useState([]);
  const [haveData, setHaveData] = useState(false);
const [showbutton,setShowbutton]=useState(false);
const [id,setid]=useState();

  useEffect(() => {
    searchData();
  }, []);

  const searchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
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
   
    setNewResult(filteredResults);
    setHaveData(true);
  };

  const handleClear = () => {
    setNewResult([]);
    setSearchValue("");
    setHaveData(true);
  };
  
  const handleEdit = (user) => {
    setSearchValue(user.name);
    setShowbutton(true);
    setid(user.id)
  };
  const handleUpdate =(searchValue)=>{

   let hero = results.map((value)=>{
      if(value.id === id){
       value.name=searchValue;
      }
      return value
    })
    setResults(hero)
  }

  const data = haveData ? newResult : results;

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search by name"
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleClear}>Clear</button>
  {showbutton && <button onClick={()=>handleUpdate(searchValue)}>Update</button>}

      <ul>
        {data.length === 0 ? (
          <li>No data available</li>
        ) : (
          data.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleEdit(user)}>Edit</button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default Home;
