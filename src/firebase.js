import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAN1_SgqL14vQlLKPxSbCh5q5So88w2grU",
  authDomain: "clone-41c8c.firebaseapp.com",
  databaseURL: "https://clone-41c8c-default-rtdb.firebaseio.com",
  projectId: "clone-41c8c",
  storageBucket: "clone-41c8c.appspot.com",
  messagingSenderId: "222598011178",
  appId: "1:222598011178:web:9f301f18824b84f5486653"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };