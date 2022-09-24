import React,{useEffect} from 'react';
import {
  SimpleGrid,
  Box,
  Text,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Tooltip,
} from '@chakra-ui/react';
import { useAstronomicalContext } from '../hooks/useAstronomicalContext';

export default function NearEarthObjects() {
  const { neo,GetNeo } = useAstronomicalContext();

  useEffect(() => {
     GetNeo();
  }, [])
  

  return (
    <Box backgroundImage="/images/deepspace2.png" backgroundSize="cover">
      <Box textAlign="center" marginTop={0}>
        <Text>Asteroids Close to Earth Orbit Today</Text>
      </Box>
      <SimpleGrid columns={[neo ? neo.length : "", null, 3]} spacing={20}>
        {neo &&
          neo.map((neo, idx) => (
            <Box key={idx} m={10} borderRadius={10} bg="#4f5b66" height="300px">
              <Flex
                direction="column"
                justifyContent="space-between"
                padding={10}
                bgGradient={[
                  'linear(to-tr, teal.500, yellow.500)',
                  'linear(to-t, blue.200, teal.500)',
                  'linear(to-b, orange.100, purple.300)',
                ]}
                borderRadius={10}
                color="black"
              >
                <Text marginTop={-5} textAlign="center">
                  {' '}
                  Asteroid Name: {neo.name}
                </Text>
                <UnorderedList>
                  <ListItem m={3}>Near Earth Object ID: {neo.id}</ListItem>
                  <ListItem m={3}>
                    Potentially Hazardous:{' '}
                    {neo.is_potentially_hazardous_asteroid ? 'YES' : 'No'}
                  </ListItem>
                  <Tooltip label="the magnitude (brightness) of a celestial object as it would be seen at a standard distance of 10 parsecs.">
                    <ListItem m={3}>
                      Absolute Magnitude: {neo.absolute_magnitude_h} *
                    </ListItem>
                  </Tooltip>
                  <ListItem m={3}>
                    Estimated Maximum Diameter(meter):{' '}
                    {Math.floor(
                      neo.estimated_diameter.meters.estimated_diameter_max,
                      2
                    )}
                    m (Rounded)
                  </ListItem>
                  <ListItem m={3}>
                    <Link color="purple" href={`${neo.nasa_jpl_url}`} isExternal>
                      JPL link for detailed info &#x2197;{' '}
                    </Link>
                  </ListItem>
                </UnorderedList>
              </Flex>
            </Box>
          ))}
      </SimpleGrid>
    </Box>
  );
}
