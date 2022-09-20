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
import { ColorModeSwitcher } from '../ColorModeSwitcher.js';
import {  Link as RouterLink  } from 'react-router-dom';

export default function Navbar() {
  return (
    <Box bg="#A0AEC0" w="100%" borderRadius="sm">
      <Flex justifyContent="flex-end" alignItems="center">
        <RouterLink to="/">
          <Text fontSize="2xl" marginLeft="10px">
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
          <ColorModeSwitcher />
        </Menu>
      </Flex>
    </Box>
  );
}
