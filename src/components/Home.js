import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useAstronomicalContext } from '../hooks/useAstronomicalContext';

export default function Home() {
  const { apod, GetApod } = useAstronomicalContext();

  useEffect(() => {
    GetApod();
  }, []);

  console.log(apod);

  return (
    <Box boxSize="md">
      Home Page here
      <p>Credit: {apod.copyright}</p>
      <Image src={apod.hdurl} alt="Astronomy Picture of the Day" />
    </Box>
  );
}
