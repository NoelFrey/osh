import './App.js';
import Header from './components/Header';
import Cards from './components/Cards';
import NavBar from './components/Navbar';
import React from 'react';
const App = () => {
  /* Returning the Header and Cards components. */
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Cards />
    </div>
  );
};
export default App;
