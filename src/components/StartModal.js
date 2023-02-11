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
  import reptile from '../img/reptile.png';
  import kollector from '../img/kollector.png';
  import torr from '../img/torr.png';
  import scorpion from '../img/scorpion.png';

function StartModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const startGame = () => {
        props.handleStart();
    };

    return (
        <>
        <Modal size='xl' isOpen='isOpen' onClose={onClose} isCentered >
          <ModalOverlay bg='blackAlpha.600' backdropFilter='auto' backdropBlur='8px'/>  
          <ModalContent>
            <ModalHeader>Where's Scorpion?</ModalHeader>
            <ModalBody>
              <Text>Find all 4 characters as fast as possible </Text>
              <Flex alignItems='stretch'>
              <Image objectFit='contain'  flexShrink='1' height='200px' width='100%' src={scorpion} alt='' />
              <Image objectFit='contain'  flexShrink='1' height='200px' width='100%' src={kollector} alt='' />
              <Image objectFit='contain'  flexShrink='1' height='200px' width='100%' src={reptile} alt='' />
              <Image objectFit='contain'  flexShrink='1' height='200px' width='100%' src={torr} alt='' />
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
  