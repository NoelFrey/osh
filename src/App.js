import './App.js';
import Header from './components/Header';
import Cards from './components/Cards';
import React from 'react';
const App = () => {
  /* Returning the Header and Cards components. */
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
};
export default App;
