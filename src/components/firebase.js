import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDJ-edb_LYEF6fw32FimkeVcG30zQJjC6w",
  authDomain: "facebook-010.firebaseapp.com",
  projectId: "facebook-010",
  storageBucket: "facebook-010.appspot.com",
  messagingSenderId: "962721315303",
  appId: "1:962721315303:web:4f09a192e9acead18ce542",
  measurementId: "G-H8LYB36719",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
