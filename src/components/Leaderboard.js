import { useState, useEffect, useRef } from 'react';
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
    Spacer,
    Flex,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';

const Leaderboard = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(true);
    const [scores, setScores] = useState([]);

    const scoresRef = props.db.collection("scores");

    useEffect(() => {
        scoresRef.orderBy('score').limit(15)
        .get()
        .then((querySnapshot) => {
            const tempScores = [];
            querySnapshot.forEach((doc) => {
                tempScores.push(doc.data());
            });
            setScores(tempScores);
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        loading 
          ?
            <>
             <Modal size='xl' isOpen='isOpen' onClose={onClose} isCentered>
                <ModalOverlay bg='blackAlpha.600' backdropFilter='auto' backdropBlur='8px'/>  
                <ModalContent>
                  <ModalHeader>Leaderboard</ModalHeader>
                  <ModalBody>
                    <Text>Loading</Text>
                  </ModalBody>
                  <ModalFooter>
                    <Flex gap='1rem'>
                      <Button onClick={props.reset}>Reset</Button>
                    </Flex>
                  </ModalFooter>
                </ModalContent>
            </Modal>
          </>
    :       
        <>
          <Modal size='xl' isOpen='isOpen' onClose={onClose} isCentered>
            <ModalOverlay bg='blackAlpha.600' backdropFilter='auto' backdropBlur='8px'/>  
            <ModalContent>
              <ModalHeader>Leaderboard</ModalHeader>
              <ModalBody>
              <TableContainer>
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th>Player</Th>
                        <Th isNumeric>Time</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        {scores.map((item, index) => {
                            return(
                              <Tr>
                                <Td>{index + 1}. {item.name}</Td>
                                <Td isNumeric>{item.score.toFixed(1)}</Td>
                              </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
                </TableContainer>









                {/* <Flex flexDir='column' gap='.5rem'>
                        {scores.map(item => {
                            console.log(item);
                            return (<Flex><Text>{item.name}</Text><Spacer /><Text>{item.score.toFixed(1)}</Text></Flex>);
                        })}
                </Flex> */}
                  </ModalBody>
                  <ModalFooter>
                    <Flex gap='1rem'>
                      <Button onClick={props.reset}>Play again</Button>
                    </Flex>
                  </ModalFooter>
                </ModalContent>
            </Modal>
          </>              
    );
}

export default Leaderboard;