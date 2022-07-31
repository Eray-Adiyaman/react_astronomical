import React from 'react';
import { Box, Flex, Image, Text, Heading, Stack } from '@chakra-ui/react';
import { useAstronomicalContext } from '../hooks/useAstronomicalContext';

const Feature = ({ title, desc, date, ...rest }) => {
  return (
    <Box marginRight={5} p={4} shadow="md" borderWidth="1px" {...rest}>
      <Flex justifyContent="space-between">
        <Heading fontSize="xl">{title}</Heading>
        <Heading fontSize="l">Date: {date}</Heading>
      </Flex>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
};

export default function Apod() {
  const { apod } = useAstronomicalContext();

  return (
    <Box m={10}>
      <Flex justifyContent="center">
        <Stack spacing={8} direction="column">
          <Feature
            title="Astronomy Picture of the Day"
            desc={apod.explanation}
            date={apod.date}
          />
          <Text>
            Credit: {apod.copyright ? apod.copyright : 'Curtesy of NASA'}
          </Text>
        </Stack>
        <Image
          maxHeight="810px"
          maxWidth="840px"
          src={apod.hdurl}
          alt="Astronomy Picture of the Day"
        />
      </Flex>
    </Box>
  );
}
