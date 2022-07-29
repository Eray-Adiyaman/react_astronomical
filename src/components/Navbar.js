import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem,Box, Flex , Text, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher.js';

export default function Navbar() {
  return (
    <Box bg="#A0AEC0" w="100%" borderRadius="sm">
        <Flex justifyContent="flex-end" alignItems="center">
        <Text fontSize='2xl' marginLeft="10px" > Astronomical </Text>
        <Spacer />
            <Menu isLazy>
            <MenuButton>Open menu</MenuButton>
            <MenuList>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
            </MenuList>
            <ColorModeSwitcher />
            </Menu>
        </Flex>
    </Box>
  );
}
