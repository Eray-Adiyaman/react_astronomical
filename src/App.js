import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Apod from './components/Apod';

function App() {
 
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/apod" exact element={<Apod />} />
      </Routes>
      </>
    
  );
}

export default App;
