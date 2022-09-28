import React from 'react';
import {
  Box,
  Image,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Link,
  Spacer,
} from '@chakra-ui/react';

export default function SingleImage({ i, image }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
        <Image
          
          key={i}
          gridColumn="span 1"
          gridRow="span 1"
          width="100%"
          height="100%"
          objectFit="cover"
          borderRadius={5}
          src={`${image.links[0].href}`}
          title={`${image.data[0].title}`}
        />
      <Button _hover={{background:"gray"}} top="-40px"  onClick={onOpen}>Enlarge</Button>
      <Modal  size="3xl" onClose={onClose} isOpen={isOpen} isCentered  >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{`${image.data[0].title}`}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              key={i}
              gridColumn="span 1"
              gridRow="span 1"
              width="100%"
              height="100%"
              objectFit="cover"
              borderRadius={5}
              src={`${image.links[0].href}`}
            />
          </ModalBody>
          <ModalFooter>
            <Link isExternal href={`${image.links[0].href}`} >See Full Size </Link>
            <Spacer />
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
