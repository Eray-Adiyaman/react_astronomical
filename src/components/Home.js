import {
  Box,
  Flex,
  Image,
  Accordion,
  Button,
  Tooltip,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useAstronomicalContext } from '../hooks/useAstronomicalContext';
import { Link } from 'react-router-dom';
import NeoAccordion from './NeoAccordion';

export default function Home() {
  const { apod, GetApod, neo, GetNeo } = useAstronomicalContext();

  useEffect(() => {
    GetApod();
    GetNeo();
  }, []);

  // console.log(apod);
  // console.log(neo);

  return (
    <>
      <Box width="100%" height="50px" bg="red">
        {' '}
        LANDING PAGE
      </Box>
      <Flex justifyContent="space-between" m="50px">
        {/* APOD BOX START*/}
        <Link to="/apod">
          <Box position="absolute" alignContent="center">
            Astronomy Picture of the Day
          </Box>
          <Box borderRadius={10} boxSize="lg">
            <Image
              borderRadius={10}
              src={apod.hdurl}
              width="512px"
              height="512px"
              alt="Astronomy Picture of the Day"
            />
          </Box>
        </Link>
        {/* APOD BOX END*/}

        {/* NEO BOX START*/}
        <Box
          borderRadius={10}
          boxSize="lg"
          backgroundImage="url('/images/spac.gif')"
          bgRepeat="no-repeat"
        >
          <Box ml="8em">
            <Tooltip label="Id's with * on them are marked Potentially HAZARDOUS!">
              <Text>
                Number of Near Earth Objects today: {neo && neo.length}
              </Text>
            </Tooltip>
          </Box>
          <Accordion>
            {neo &&
              neo.map((neo, idx) => (
                <NeoAccordion neo={neo} idx={idx} key={idx} />
              ))}
          </Accordion>

          <Link to="/neo">
            <Flex direction="column">
              <Button> See More Information Here &#x2197; </Button>
            </Flex>
          </Link>
        </Box>
        {/* NEO BOX END*/}

        {/* MARS IMAGES BOX START*/}
        <Box boxSize="lg" bg="green" borderRadius={10}>
          Curiosity Mars Photos
        </Box>
        {/* MARS IMAGES BOX END*/}
      </Flex>
    </>
  );
}
