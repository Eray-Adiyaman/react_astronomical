import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text, Heading, Stack } from '@chakra-ui/react';
import { useAstronomicalContext } from '../hooks/useAstronomicalContext';
import Circular from './Circular';

const Feature = ({ title, desc, date, imgtitle, ...rest }) => {
  return (
    <Box
      marginRight={5}
      p={4}
      shadow="md"
      borderWidth="1px"
      {...rest}
      borderRadius="5px"
    >
      <Flex justifyContent="space-between">
        <Heading ml="100px" fontSize="xl">
          {title}
        </Heading>
        <Heading fontSize="l">Date: {date}</Heading>
      </Flex>
      <Text mt={4} fontWeight={500} decoration="underline">
        {imgtitle}
      </Text>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
};

export default function Apod() {
  const { apod, isImage,GetApod } = useAstronomicalContext();
  const [Loader, setLoader] = useState(true);

  const jamesWebbInfo = {
    title: 'Cosmic Cliffs',
    desc: `'This landscape of “mountains” and “valleys” speckled with glittering stars is actually the edge of a nearby, young, star-forming region called NGC 3324 in the Carina Nebula. Captured in infrared light by NASA’s new James Webb Space Telescope, this image reveals for the first time previously invisible areas of star birth.
            Called the Cosmic Cliffs, Webb’s seemingly three-dimensional picture looks like craggy mountains on a moonlit evening. In reality, it is the edge of the giant, gaseous cavity within NGC 3324, and the tallest “peaks” in this image are about 7 light-years high. The cavernous area has been carved from the nebula by the intense ultraviolet radiation and stellar winds from extremely massive, hot, young stars located in the center of the bubble, above the area shown in this image.
            The blistering, ultraviolet radiation from the young stars is sculpting the nebula’s wall by slowly eroding it away. Dramatic pillars tower above the glowing wall of gas, resisting this radiation. The “steam” that appears to rise from the celestial “mountains” is actually hot, ionized gas and hot dust streaming away from the nebula due to the relentless radiation.`,
    date: '2022-07-12',
  };

  useEffect(() => {
    GetApod();
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    
  });

  return (
    <Box m={10}>
      {Loader ? (
        <Circular />
      ) : (
        <Flex justifyContent="center">
          <Stack spacing={8} direction="column">
            {isImage ? (
              <Feature
                title="Astronomy Picture of the Day"
                imgtitle={apod.title}
                desc={apod.explanation}
                date={apod.date}
              />
            ) : (
              <Feature
                title="Astronomy Picture of the Day"
                imgtitle={jamesWebbInfo.title}
                desc={jamesWebbInfo.desc}
                date={jamesWebbInfo.date}
              />
            )}
            {isImage ? (
              <Text>
                Credit: {apod.copyright ? apod.copyright : 'Curtesy of NASA'}
              </Text>
            ) : (
              <Text> Credit: NASA, ESA, CSA, and STScI </Text>
            )}
          </Stack>
          {isImage ? (
            <Image
              borderRadius="10px"
              maxHeight="810px"
              maxWidth="840px"
              src={apod.hdurl}
              alt="Astronomy Picture of the Day"
            />
          ) : (
            <Image
              borderRadius="10px"
              maxHeight="810px"
              maxWidth="840px"
              objectFit="cover"
              src="./images/james_webb.jpg"
              alt="Astronomy Picture of the Day"
            />
          )}
        </Flex>
      )}
    </Box>
  );
}
