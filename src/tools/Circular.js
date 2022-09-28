import { Box, CircularProgress,Flex } from '@chakra-ui/react'
import React from 'react'

export default function Circular({size,marginTop}) {
  
  const defaultSize = size ? size : "150px";
  const defaultMargin = marginTop ? marginTop : "250px"; 
 

  return (
    <Box marginTop={`${defaultMargin}`}>
        <Flex justifyContent="center">
            <CircularProgress
              color='purple'
              isIndeterminate
              size= {`${defaultSize}`}
              role="progressbar"
              thickness="7px"
            />
        </Flex>
    </Box>
  )}
