import { Box, CircularProgress,Flex } from '@chakra-ui/react'
import React from 'react'

export default function Circular() {
  return (
    <Box marginTop="250px">
        <Flex justifyContent="center">
            <CircularProgress
              color='purple'
              isIndeterminate
              size="150px"
              role="progressbar"
              thickness="7px"
            />
        </Flex>
    </Box>
  )}
