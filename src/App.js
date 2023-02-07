import './App.css';
import { useState } from 'react';
import { ChakraProvider, Image, Text } from '@chakra-ui/react';
import StartModal from './components/StartModal';
import StatusBar from './components/StatusBar';
import gameImage from './img/gameImage.jpg';
import CharacterPicker from './components/CharacterPicker';
import firebase from './firebase';

function App() {
  const [gameState, setGameState] = useState('setup');
  const [charSelect, setCharSelect] = useState(false);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [found, setFound] = useState({scorpion: false, reptile: false, torr: false, kollector: false});
  let locdat = { scorpion: {}, reptile: {}, torr: {}, kollector: {}};

  const locRef = firebase.firestore().collection('locCheck');

  locRef.doc('reptile').get().then((doc) => {
    locdat.reptile = doc.data();
  }).catch((error) => {
    console.log('Error getting locdat:', error);
  });
  locRef.doc('scorpion').get().then((doc) => {
    locdat.scorpion = doc.data();
  }).catch((error) => {
    console.log('Error getting locdat:', error);
  });
  locRef.doc('torr').get().then((doc) => {
    locdat.torr = doc.data();
  }).catch((error) => {
    console.log('Error getting locdat:', error);
  });
  locRef.doc('kollector').get().then((doc) => {
    locdat.kollector = doc.data();
  }).catch((error) => {
    console.log('Error getting locdat:', error);
  });

  const handleClick = (e) => {
    // console.log(`y: ${e.pageY / e.target.clientHeight}`);
    // console.log(`x: ${e.pageX / e.target.clientWidth}`);
    setCoords({x: e.pageX, y: e.pageY, xP: e.pageX / e.target.clientWidth, yP: e.pageY / e.target.clientHeight});
    setCharSelect(true);
  }

  const checkLoc = (name, coords) => {
    if(coords.yP >= locdat[name].yMin && coords.yP <= locdat[name].yMax) {
      if(coords.xP >= locdat[name].xMin && coords.xP <= locdat[name].xMax) {
        const tempState = {...found};
        tempState[name] = true;
        setFound(tempState);
        console.log(`you found ${name}`);
        return true;
      }
    } else return false;
  }

  return (
    <ChakraProvider>
    <div className="App" position='relative'>
      <Image onClick={handleClick} src={gameImage} alt='' width='100vw' />
      {gameState === 'setup' && <StartModal setGameState={setGameState} />}
      {charSelect && <CharacterPicker setCharSelect={setCharSelect} coords={coords} checkLoc={checkLoc} />}
      {gameState === 'active' && <StatusBar found={found} />}
    </div>
    </ChakraProvider>
  );
}


export default App;
