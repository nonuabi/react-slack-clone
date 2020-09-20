import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDwME4ZGZDupip61PoKbZlSwDvRc0uhMfI',
  authDomain: 'react-slack-clone-b7083.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-b7083.firebaseio.com',
  projectId: 'react-slack-clone-b7083',
  storageBucket: 'react-slack-clone-b7083.appspot.com',
  messagingSenderId: '300494109402',
  appId: '1:300494109402:web:a7713394155b8979adc3e3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
} 