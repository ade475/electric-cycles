import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDDF2sQs25MwEJ83hjaiOW5o1mKKyzCewo',
  authDomain: 'electric-cycles.firebaseapp.com',
  databaseURL: 'https://electric-cycles.firebaseio.com',
  projectId: 'electric-cycles',
  storageBucket: 'electric-cycles.appspot.com',
  messagingSenderId: '598208257852',
  appId: '1:598208257852:web:fe74ba1b0bcb1380534839',
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
export const store = firebase.firestore();
export { db, auth };
