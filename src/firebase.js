import firebase from 'firebase';
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: 'AIzaSyDTv6WdnCvpIdzk4FdsgFKeS69L71F6GEA',
  authDomain: 'ecycl-26768.firebaseapp.com',
  databaseURL: 'https://ecycl-26768.firebaseio.com',
  projectId: 'ecycl-26768',
  storageBucket: 'ecycl-26768.appspot.com',
  messagingSenderId: '527002975235',
  appId: '1:527002975235:web:f7d439076d3dd783a4a236',
  measurementId: 'G-R46CMT2FSY',
};

// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
