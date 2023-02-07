import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
    Image,
    Flex
  } from '@chakra-ui/react';
  import reptile from '../img/reptile.png';
  import kollector from '../img/kollector.png';
  import torr from '../img/torr.png';
  import scorpion from '../img/scorpion.png';

function StartModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const startGame = () => {
        props.setGameState('active');
    };

    return (
        <>
        <Modal size='xl' isOpen='isOpen' onClose={onClose} isCentered>
          <ModalOverlay bg='blackAlpha.600' backdropFilter='auto' backdropBlur='8px'/>  
          <ModalContent>
            <ModalHeader>Where's Scorpion?</ModalHeader>
            <ModalBody>
              <Text>Find all 4 characters as fast as possible </Text>
              <Flex>
              <Image src={scorpion} alt='' />
              <Image src={torr} alt='' />
              <Image src={kollector} alt='' />
              <Image src={reptile} alt='' />
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button onClick={startGame}>Start</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default StartModal;
  