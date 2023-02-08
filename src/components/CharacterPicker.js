import reptile from '../img/reptile.png';
import kollector from '../img/kollector.png';
import torr from '../img/torr.png';
import scorpion from '../img/scorpion.png';
import {
    Menu,
    MenuList,
    MenuItem,
    Image
  } from '@chakra-ui/react';

const CharacterPicker = (props) => {
    const handleChange = (name) => {
        props.setCharSelect(false);
        props.checkLoc(name, props.coords);
    }

    return (
        <Menu defaultIsOpen closeOnBlur={false} closeOnSelect={false} >
            <MenuList position='absolute' zIndex='2' top={props.coords.y} left={props.coords.x}>
                <MenuItem minH='40px' onClick={() => handleChange('scorpion')}>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='top'
                    src={scorpion}
                    alt='Scorpion'
                    mr='12px'
                    objectFit='cover'
                />
                <span>Scorpion</span>
                </MenuItem>
                <MenuItem minH='40px' onClick={() => handleChange('reptile')}>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='top'
                    src={reptile}
                    alt='Reptile'
                    mr='12px'
                    objectFit='cover'
                />
                <span>Reptile</span>
                </MenuItem>
                <MenuItem minH='40px' onClick={() => handleChange('torr')}>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='50% 10%'
                    src={torr}
                    alt='Torr'
                    mr='12px'
                    objectFit='cover'
                />
                <span>Torr</span>
                </MenuItem>
                <MenuItem minH='40px' onClick={() => handleChange('kollector')}>
                <Image
                    boxSize='3.5rem'
                    borderRadius='full'
                    objectPosition='top'
                    src={kollector}
                    alt='Kollector'
                    mr='12px'
                    objectFit='cover'
                />
                <span>Kollector</span>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default CharacterPicker