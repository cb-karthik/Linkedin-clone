// import firebase from "firebase";

import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC7gLc4Mgu29wou0Ax8g5frCC-nY5pJf0Q",
    authDomain: "linkedin-clone-e427d.firebaseapp.com",
    projectId: "linkedin-clone-e427d",
    storageBucket: "linkedin-clone-e427d.appspot.com",
    messagingSenderId: "491523333490",
    appId: "1:491523333490:web:69969aa310b213ff0e11eb",
    measurementId: "G-8XEPT9P6BY"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db= firebaseApp.firestore();
  // const auth = firebase.auth();


 initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const db = getFirestore();

  // export {db,auth};
