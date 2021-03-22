import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const App = ({ children }) => {
  return (
    <div className="app">
      <Navbar />

      <div className="container">
          <Cards />
          {children}
      </div>
    </div>
  );
}

export default App;