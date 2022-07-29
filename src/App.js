import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
    </Box>
  );
}

export default App;
