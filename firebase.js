import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyChrzRz60FdWLvCKfGUYtm5GX7duVO8AKU',
//   authDomain: 'teamapple-4f107.firebaseapp.com',
//   projectId: 'teamapple-4f107',
//   storageBucket: 'teamapple-4f107.appspot.com',
//   messagingSenderId: '359514959473',
//   appId: '1:359514959473:web:b195adeaadc922f1da35d0',
//   measurementId: 'G-Z21B8YV9BB',
// };

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpX29iakGOWZo3kQ-iknorbmFhzjiLEUA',
  authDomain: 'teamapple3-dfdf6.firebaseapp.com',
  projectId: 'teamapple3-dfdf6',
  storageBucket: 'teamapple3-dfdf6.appspot.com',
  messagingSenderId: '361667734981',
  appId: '1:361667734981:web:85d2bde51a618974de2fac',
  measurementId: 'G-EKFRPFZM80',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);

export default firebase;

// Path: screens/SignUp.jsx
