import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB0exmkcH_L9yfUK-1rxe9nL6JGrv5O6v8",
  authDomain: "whatsapp-nextjs-a298a.firebaseapp.com",
  projectId: "whatsapp-nextjs-a298a",
  storageBucket: "whatsapp-nextjs-a298a.appspot.com",
  messagingSenderId: "912029637464",
  appId: "1:912029637464:web:feb0f3500811b758d1e32d"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
