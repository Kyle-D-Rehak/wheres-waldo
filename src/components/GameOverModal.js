import { useState, useRef } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    Text,
    useDisclosure,
    Image,
    Flex
  } from '@chakra-ui/react';


const GameOverModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const submitScore = () => {};

    return (
      <>
        <Modal size='xl' isOpen='isOpen' onClose={onClose} isCentered>
          <ModalOverlay bg='blackAlpha.600' backdropFilter='auto' backdropBlur='8px'/>  
          <ModalContent>
            <ModalHeader>Game over!</ModalHeader>
            <ModalBody>
              <Text>Your time was {props.timer.toFixed(1)} </Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={submitScore}>Submit Score</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

export default GameOverModal;