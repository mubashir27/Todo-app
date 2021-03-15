import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4w5Y5VGc2PB0N4DQubgTCy4GNNmUSWhE",
  authDomain: "todoapp-92e4d.firebaseapp.com",
  projectId: "todoapp-92e4d",
  storageBucket: "todoapp-92e4d.appspot.com",
  messagingSenderId: "937944435897",
  appId: "1:937944435897:web:ee9923e43bd08d427c1f68",
  measurementId: "G-DQKWXF1TCL",
});
const db = firebaseApp.firestore();

export default db;
