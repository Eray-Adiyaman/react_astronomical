import React from 'react';
import {
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export default function NeoAccordion({ neo }) {
  console.log(neo);

  return (
    <>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Near Earth Object Name: {neo.name} {neo.is_potentially_hazardous_asteroid ? "*" : ""} 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Is it Potentially Hazardous? :{' '}
          {neo.is_potentially_hazardous_asteroid ? 'YES' : 'No'}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}
