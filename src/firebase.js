import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSyQ194iEowWPcmk0AwdU99f1TNwihyGw",
  authDomain: "clone-daaf9.firebaseapp.com",
  databaseURL: "https://clone-daaf9.firebaseio.com",
  projectId: "clone-daaf9",
  storageBucket: "clone-daaf9.appspot.com",
  messagingSenderId: "707314235025",
  appId: "1:707314235025:web:bbaffa14ebcbcc5a9d3130",
  measurementId: "G-7L9TLJQ9BY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const provide = new firebase.auth.FacebookAuthProvider();
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth, provider, provide };
