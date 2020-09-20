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
export const firestore = firebase.firestore();

export const signInWithGoogle = () => {
  //Initialize google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  //Ask user to select gmail account in a new window.
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshop = await userRef.get();

  if (!snapshop.exists) {
    const { displayName, email, photoURL } = user;

    const createdAt = new Date();

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error.message);
    }
  }

  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.error('Error in getUserDocument', error.message);
  }
}
