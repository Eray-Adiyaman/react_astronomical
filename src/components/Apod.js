import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading, Stack } from '@chakra-ui/react';
import { useAstronomicalContext } from '../hooks/useAstronomicalContext';
import Circular from './Circular';


const Feature = ({ title, desc, date,imgtitle, ...rest }) => {
  return (
    <Box marginRight={5} p={4} shadow="md" borderWidth="1px" {...rest} borderRadius="5px">
      <Flex justifyContent="space-between">
        <Heading ml="100px" fontSize="xl">{title}</Heading>
        <Heading fontSize="l">Date: {date}</Heading>
      </Flex>
      <Text mt={4} fontWeight={500} decoration="underline">{imgtitle}</Text>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
};

export default function Apod() {
  const { apod } = useAstronomicalContext();
  const [Loader,setLoader]=useState(true)
  
  useEffect(()=>{
    setTimeout(() => {
      setLoader(false)
    }, 1000);
  })

  return (
    <Box m={10}>
      {Loader ? <Circular /> : 
      <Flex justifyContent="center">
        <Stack spacing={8} direction="column">
          <Feature
            title="Astronomy Picture of the Day"
            imgtitle={apod.title}
            desc={apod.explanation}
            date={apod.date}
          />
          <Text>
            Credit: {apod.copyright ? apod.copyright : 'Curtesy of NASA'}
          </Text>
        </Stack>
        <Image
          borderRadius="10px"
          maxHeight="810px"
          maxWidth="840px"
          src={apod.hdurl}
          alt="Astronomy Picture of the Day"
        />
      </Flex>
      }
    </Box>
  );
}
