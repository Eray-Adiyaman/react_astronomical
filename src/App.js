import React from 'react';
import { Route,Routes} from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Apod from './components/AstronomyPictureOfTheDay/Apod';
import NearEarthObjects from './components/NearEarthObjects/NearEarthObjects';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { Box } from '@chakra-ui/react';

function App() {
 
  return (
      <Box h='calc(100vh)' >
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/apod" exact element={<Apod />} />
        <Route path="/neo" exact element={<NearEarthObjects />} />
        <Route path="/gallery" exact element={<ImageGallery />} />
      </Routes>
      </Box>
    
  );
}

export default App;
