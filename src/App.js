import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Apod from './components/Apod';
import NearEarthObjects from './components/NearEarthObjects';
import ImageGallery from './components/ImageGallery';

function App() {
 
  return (
      <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/apod" exact element={<Apod />} />
        <Route path="/neo" exact element={<NearEarthObjects />} />
        <Route path="/gallery" exact element={<ImageGallery />} />
      </Routes>
      </>
    
  );
}

export default App;
