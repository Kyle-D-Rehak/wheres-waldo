import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA2mmCd65e3Nk0m4s2RuX1m0ZBIzZlfvb4",
    authDomain: "where-s-scorpion.firebaseapp.com",
    projectId: "where-s-scorpion",
    storageBucket: "where-s-scorpion.appspot.com",
    messagingSenderId: "770928874411",
    appId: "1:770928874411:web:3073d2f06e89a259d8f8ee",
    measurementId: "G-NV9242FPFE",
  };

firebase.initializeApp(firebaseConfig);

export default firebase;