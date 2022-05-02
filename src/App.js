import './App.js';
import Header from './Header';
import Cards from './Cards';
import React from 'react';
const App = (props) => {
  /* Returning the Header and Cards components. */
  return (
    <div className="App">
      <Header />
      <Cards />
    </div>
  );
};
export default App;
