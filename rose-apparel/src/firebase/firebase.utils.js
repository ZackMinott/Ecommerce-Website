import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAavK7oKx9gBJHECtORpU_xVnaOSY-CzpY",
    authDomain: "rose-apparel-db.firebaseapp.com",
    databaseURL: "https://rose-apparel-db.firebaseio.com",
    projectId: "rose-apparel-db",
    storageBucket: "rose-apparel-db.appspot.com",
    messagingSenderId: "284155324490",
    appId: "1:284155324490:web:9c9736b225adf72a65deb3",
    measurementId: "G-11Q365EYBN"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;