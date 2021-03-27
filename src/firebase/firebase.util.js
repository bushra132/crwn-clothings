import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const congig = {
  apiKey: 'AIzaSyDgnIpNbZv5KxhC5S6Rd0kvxlPcMe_PYJU',
  authDomain: 'crwn-db-aaa44.firebaseapp.com',
  projectId: 'crwn-db-aaa44',
  storageBucket: 'crwn-db-aaa44.appspot.com',
  messagingSenderId: '436049214260',
  appId: '1:436049214260:web:28657234eb17a811c6c361',
  measurementId: 'G-E7ZVX0HGQ4',
};

firebase.initializeApp(congig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
