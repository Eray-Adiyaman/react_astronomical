import {
  Box,
  Flex,
  List,
  ListItem,
  Text,
  Link,
  ListIcon,
} from '@chakra-ui/react';
import { Icon, EmailIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { DiReact } from 'react-icons/di';
import { FiGithub } from 'react-icons/fi';

export default function About() {
  return (
    <>
      <Text marginTop="2rem" textAlign="center">
        This Site Is Generated Using React And NASA public API's
      </Text>
      <Box marginTop="10rem" textAlign="center">
        <Text marginBottom="10px">
          Here is the full list of dependencies and endpoints{' '}
        </Text>
        <Flex justifyContent="space-evenly">
          <Box>
            <Text textDecoration="underline">Project Dependencies</Text>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>
              <ListItem>React v18</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>

              <ListItem>React Router v6</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>

              <ListItem>Chakra-ui v2</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>

              <ListItem>Chakra-ui/icons</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>

              <ListItem>Axios</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>
              <ListItem>dotenv</ListItem>
            </List>
          </Box>
          <Box>
            <Text textDecoration="underline">NASA Public API'S</Text>
            <List spacing={1}>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>
              <ListItem> Astronomy Picture of the Day(Apod)</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>
              <ListItem> Asteroids - Near Earth Objects(Neo)</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>
              <ListItem> NASA Image and Video Library</ListItem>
              <ListItem>
                <ListIcon as={ChevronDownIcon} color="gray.500" />
              </ListItem>
              <ListItem> Space News API (External-RapidApi)</ListItem>
            </List>
          </Box>
        </Flex>
        <Box w="100px" margin="0 auto">
          <Link
            isExternal
            href="https://github.com/Eray-Adiyaman/react_astronomical"
          >
            {/* <Image marginLeft="35px" w="30%" src="./images/github_icon.png" /> */}
            <Text marginTop="4px">
              <Icon as={FiGithub} /> Git Repo{' '}
            </Text>
          </Link>
        </Box>
        <Box>
          <Text>
            <Icon as={DiReact} /> Eray ADIYAMAN{' '}
          </Text>
          <Text>
            {' '}
            <EmailIcon /> erayadiyaman@outlook.com
          </Text>
        </Box>
      </Box>
    </>
  );
}
