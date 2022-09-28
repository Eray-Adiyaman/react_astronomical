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
import { useAstronomicalContext } from '../../hooks/useAstronomicalContext';
import { Link } from 'react-router-dom';
import NeoAccordion from '../NearEarthObjects/NeoAccordion';
import NewsPosts from '../NewsPosts/NewsPosts';
import Circular from "../../tools/Circular"

export default function Home() {
  const { apod, GetApod, neo, GetNeo ,isImage ,GetSpaceNews,news} = useAstronomicalContext();

  useEffect(() => {
    GetApod();
    GetNeo();
    GetSpaceNews();
  }, []);

  // console.log(apod);
  // console.log(neo);
  console.log(news)

  return (
    <>
      <Flex justifyContent="space-evenly" direction="row" width="100%" height="150px" marginTop="20px">
        {news ? <NewsPosts /> :
        <Box flexDirection="column">
        <Text>Fetching Space Related News</Text>
        <Circular size="50px" marginTop="50px" />
        </Box> 
        }  
       
      </Flex>
      <Flex justifyContent="space-between" m="50px">
        {/* APOD BOX START*/}
        <Link to="/apod">
          <Text position="absolute" width="512px" textAlign="center" marginTop="5px" >
            Astronomy Picture of the Day
          </Text>
          <Box borderRadius={10} boxSize="lg">
            {isImage ? <Image
              borderRadius={10}
              src={apod.hdurl}
              width="512px"
              height="512px"
              objectFit="cover"
              alt="Astronomy Picture of the Day"
            /> : <Image
            borderRadius={10}
            src="./images/james_webb.jpg"
            width="512px"
            height="512px"
            objectFit="cover"
            alt="Astronomy Picture of the Day"
          /> }
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
          <Box>
            <Tooltip label="Id's with * on them are marked Potentially HAZARDOUS!">
              <Text textAlign="center" padding={5}>
                Number of Near Earth Objects today: {neo && neo.length}
              </Text>
            </Tooltip>
          </Box>
          <Accordion>
            {neo &&
              neo.slice(0,neo.length > 5 ? 5 : neo.length).map((neo, idx) => (
                <NeoAccordion neo={neo} idx={idx} key={idx} />
              ))}
          </Accordion>

          <Link to="/neo">
            <Flex direction="column">
              <Button borderRadius="none" > See More Information And Full List Here &#x2197; </Button>
            </Flex>
          </Link>
        </Box>
        {/* NEO BOX END*/}

        {/* MARS IMAGES BOX START*/}
        <Link to="/gallery">
          <Text position="absolute" width="512px" textAlign="center" marginTop="5px" >
             NASA Image Search
          </Text>
          <Box boxSize="lg" bg="green" borderRadius={10}>
            <Image
              borderRadius={10}
              src="./images/james_webb.jpg"
              width="512px"
              height="512px"
              objectFit="cover"
              alt="Astronomy Picture of the Day"
            /> 
          </Box>
        </Link>
        {/* MARS IMAGES BOX END*/}
      </Flex>
    </>
  );
}
