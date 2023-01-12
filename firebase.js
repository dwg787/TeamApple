import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/database";
import "firebase/compat/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyChrzRz60FdWLvCKfGUYtm5GX7duVO8AKU",
//   authDomain: "teamapple-4f107.firebaseapp.com",
//   projectId: "teamapple-4f107",
//   storageBucket: "teamapple-4f107.appspot.com",
//   messagingSenderId: "359514959473",
//   appId: "1:359514959473:web:b195adeaadc922f1da35d0",
//   measurementId: "G-Z21B8YV9BB",
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnLHAPwv31MVnATtgqabeJVM9_xR0Lems",
  authDomain: "teamapple2.firebaseapp.com",
  projectId: "teamapple2",
  storageBucket: "teamapple2.appspot.com",
  messagingSenderId: "760023601638",
  appId: "1:760023601638:web:52ea0f70face954e038627",
  measurementId: "G-R5ZR49VQ1T"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);

export default firebase;

// Path: screens/SignUp.jsx
