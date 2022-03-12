import firebase from 'firebase'; 


const {
  REACT_APP_API_FIREBASE,
  REACT_APP_AUTH_DOMAIN,
  REACT_APP_PROJECT_ID,
  REACT_APP_STORAGE_BUCKET,
  REACT_APP_MESS_SENDER_ID,
  REACT_APP_APPLI_ID,
  REACT_APP_MEASUREMENT_ID
} = process.env

// config we get on firebase
const firebaseConfig = {
    apiKey: REACT_APP_API_FIREBASE,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId:  REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESS_SENDER_ID,
    appId: REACT_APP_APPLI_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
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