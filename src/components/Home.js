import { Box, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useAstronomicalContext } from '../hooks/useAstronomicalContext';

export default function Home() {
  const { apod, GetApod , neo, GetNeo} = useAstronomicalContext();

  useEffect(() => {
    GetApod();
    GetNeo();
  }, []);

  // console.log(apod);
  // console.log(neo)



  return (
    <>
    <Box width="100%" height="50px" bg="red"> LANDING PAGE</Box>
    <Flex justifyContent="space-between" m="50px">
      <Box boxSize="lg" bg="blue">
        <Box>Credits vs
          <p>Credit: {apod.copyright}</p>
        </Box>
        <Image src={apod.hdurl} alt="Astronomy Picture of the Day" />
      </Box>
      <Box boxSize="lg" bg="red">
         Number of near earth objects today: {neo.length}
      </Box>
      <Box boxSize="lg" bg="green">
        Curiosity Mars Photos
      </Box>
    </Flex>
    </>
  );
}
