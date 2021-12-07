import firebase from "firebase";

const firebaseConfig = {
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0exmkcH_L9yfUK-1rxe9nL6JGrv5O6v8",
  authDomain: "whatsapp-nextjs-a298a.firebaseapp.com",
  projectId: "whatsapp-nextjs-a298a",
  storageBucket: "whatsapp-nextjs-a298a.appspot.com",
  messagingSenderId: "912029637464",
  appId: "1:912029637464:web:feb0f3500811b758d1e32d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
