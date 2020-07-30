import React from 'react';
import Header from "./Header";
import Search from "./Search"
import './App.css';

function App() {
  const key = process.env.REACT_APP_WEATHERAPP_API_KEY;
  
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
