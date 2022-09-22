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
      <Button onClick={onOpen}>Trigger modal</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl" >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
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
              title={`${image.data[0].title}`}
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
