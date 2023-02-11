import { useEffect, useState } from 'react';
import { Flex, Image, Box, Text } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import reptile from '../img/reptile.png';
import kollector from '../img/kollector.png';
import torr from '../img/torr.png';
import scorpion from '../img/scorpion.png';

const StatusBar = (props) => {
    const [localTimer, setLocalTimer] = useState(0);

    useEffect(() => {
        if(props.gameState === 'active'){
            const interval = setInterval(() => {
                setLocalTimer(() => localTimer + .1)
            }, 100);
    
            return () => {
                console.log(`clearing interval`);
                clearInterval(interval);
              };
        } 
    }, [localTimer, props]);

    useEffect(() => {
        if(props.gameState === 'setup') {
            setLocalTimer(0);
        }
    }, [props]);

    useEffect(() => {
        if(props.gameState === 'gameover') {
            props.setTimer(localTimer);
        }
    }, [props, localTimer]);

    return (
        <Flex position='fixed' bottom='4px' right='4px' zIndex='2' gap='.5rem' bgColor='gray.800' padding='.5rem' borderRadius='.5rem' boxShadow='base' >
            <Flex alignItems='center' width='6rem' marginLeft='.5rem' >
                <Text color='green.500' fontWeight='bold' fontSize='2rem'>{localTimer.toFixed(1)}</Text>
            </Flex>
            <Box position='relative'>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='top'
                    src={scorpion}
                    alt='Scorpion'
                    objectFit='cover'
                    />
                {props.found.scorpion && <CheckIcon color='green.500' boxSize='14' position='absolute' top='0%' left='0%' zIndex='4' bgColor='blackAlpha.600' borderRadius='full' padding='.25rem' />}
            </Box>    
            <Box position='relative'>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='top'
                    src={reptile}
                    alt='Reptile'
                    objectFit='cover'
                />
                {props.found.reptile && <CheckIcon color='green.500' boxSize='14' position='absolute' top='0%' left='0%' zIndex='4' bgColor='blackAlpha.600' borderRadius='full' padding='.25rem' />}
            </Box>
            <Box position='relative'>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='50% 10%'
                    src={torr}
                    alt='Torr'
                    objectFit='cover'
                />
                {props.found.torr && <CheckIcon color='green.500' boxSize='14' position='absolute' top='0%' left='0%' zIndex='4' bgColor='blackAlpha.600' borderRadius='full' padding='.25rem'/>}
            </Box>
            <Box position='relative'>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='top'
                    src={kollector}
                    alt='Kollector'
                    objectFit='cover'
                />
                {props.found.kollector && <CheckIcon color='green.500' boxSize='14' position='absolute' top='0%' left='0%' zIndex='4' bgColor='blackAlpha.600' borderRadius='full' padding='.25rem' />}
            </Box>
        </Flex>
    );
}

export default StatusBar;