import React from 'react';
import Navbar from './components/Navbar';
import Cards from './components/Cards';

const App = ({ children }) => {
  return (
    <div className="app">
      <Navbar />

      <div className="container">
        {/* <div className="container-cards"> */}
          <Cards />
        {/* </div> */}
        {/* <div className="container-table"> */}
          {children}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;