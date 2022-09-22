import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { FaInfo } from 'react-icons/fa';
import {  Link as RouterLink  } from 'react-router-dom';

export default function Navbar() {

  
 
  
  
  return (
    <Box bg="#A0AEC0" w="100%" borderRadius="sm">
      <Flex justifyContent="flex-end" alignItems="center" margin="auto 5px">
        <RouterLink to="/">
          <Text fontSize="2xl" >
            Astronomical
          </Text>
        </RouterLink>
        <Spacer />
        <Menu isLazy>
          <MenuButton>Info</MenuButton>
          <MenuList>
           <Link href='https://api.nasa.gov/' isExternal>
              <MenuItem>NASA API's</MenuItem>
           </Link>
            <MenuItem>About</MenuItem>
          </MenuList>
          <FaInfo />
        </Menu>
      </Flex>
    </Box>
  );
}
