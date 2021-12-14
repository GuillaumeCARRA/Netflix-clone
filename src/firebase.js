import firebase from 'firebase'; 

// config we get on firebase
const firebaseConfig = {
    apiKey: "AIzaSyDdwwYi13hKEVdUlwxL6eSQFPUq_zKk1ow",
    authDomain: "netflix-clone-97fb7.firebaseapp.com",
    projectId: "netflix-clone-97fb7",
    storageBucket: "netflix-clone-97fb7.appspot.com",
    messagingSenderId: "561399352115",
    appId: "1:561399352115:web:ed8c9e4a44f289c9438c46",
    measurementId: "G-1J7G55SMCP"
  };

// we initialize the application
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firestore is the db that we're going to be using
// it's a real time db
// it's going to allow us to keep track of what 
// the user's is correct
const db = firebaseApp.firestore();

// for the authentication
const auth = firebase.auth();

export { auth };
export default db; 