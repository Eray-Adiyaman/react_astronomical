import { Box, Flex, Text, Heading} from '@chakra-ui/react';


export default function Feature({ title, desc, date, imgtitle, ...rest }){
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