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
    Input,
    Flex
  } from '@chakra-ui/react';


const GameOverModal = (props) => {
    const [name, setName] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const submitScore = () => {
      if(name !== '') {
        props.db.collection("scores").add({
          name: name,
          score: props.timer
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        })
        .finally(() => {
          setName('');
          props.setGameState('leaderboard');
        });
      }
    };

    const handleChange = (e) => {
      setName(e.target.value);
    }

    return (
      <>
        <Modal size='xl' isOpen='isOpen' onClose={onClose} isCentered>
          <ModalOverlay bg='blackAlpha.600' backdropFilter='auto' backdropBlur='8px'/>  
          <ModalContent>
            <ModalHeader>Game over!</ModalHeader>
            <ModalBody>
              <Text>Your time was {props.timer.toFixed(1)} seconds</Text>
              <Input placeholder='Name' onChange={handleChange} value={name}/>
            </ModalBody>
            <ModalFooter>
              <Flex gap='1rem'>
                <Button onClick={props.reset}>Reset</Button>
                <Button onClick={submitScore}>Submit Score</Button>
              </Flex>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
}

export default GameOverModal;