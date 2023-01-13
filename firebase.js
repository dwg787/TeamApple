import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Team Apple 1
// const firebaseConfig = {
//   apiKey: "AIzaSyChrzRz60FdWLvCKfGUYtm5GX7duVO8AKU",
//   authDomain: "teamapple-4f107.firebaseapp.com",
//   projectId: "teamapple-4f107",
//   storageBucket: "teamapple-4f107.appspot.com",
//   messagingSenderId: "359514959473",
//   appId: "1:359514959473:web:b195adeaadc922f1da35d0",
//   measurementId: "G-Z21B8YV9BB",
// };

// Team Apple 2
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBnLHAPwv31MVnATtgqabeJVM9_xR0Lems",
//   authDomain: "teamapple2.firebaseapp.com",
//   projectId: "teamapple2",
//   storageBucket: "teamapple2.appspot.com",
//   messagingSenderId: "760023601638",
//   appId: "1:760023601638:web:52ea0f70face954e038627",
//   measurementId: "G-R5ZR49VQ1T"
// };


// Team Apple 3
const firebaseConfig = {
  apiKey: "AIzaSyCpX29iakGOWZo3kQ-iknorbmFhzjiLEUA",
  authDomain: "teamapple3-dfdf6.firebaseapp.com",
  projectId: "teamapple3-dfdf6",
  storageBucket: "teamapple3-dfdf6.appspot.com",
  messagingSenderId: "361667734981",
  appId: "1:361667734981:web:85d2bde51a618974de2fac",
  measurementId: "G-EKFRPFZM80"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);

export default firebase;

// Path: screens/SignUp.jsx
