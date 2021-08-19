import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBne1bHx2OgaBYYK5w3OnvQWX9anbEAooI",
    authDomain: "pluggedin-71c95.firebaseapp.com",
    projectId: "pluggedin-71c95",
    storageBucket: "pluggedin-71c95.appspot.com",
    messagingSenderId: "787463295761",
    appId: "1:787463295761:web:a8203cb44f91ccbda032b0",
    measurementId: "G-H6ZS7H2025"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth()

export { db, auth };