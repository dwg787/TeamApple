import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyChrzRz60FdWLvCKfGUYtm5GX7duVO8AKU",
  authDomain: "teamapple-4f107.firebaseapp.com",
  projectId: "teamapple-4f107",
  storageBucket: "teamapple-4f107.appspot.com",
  messagingSenderId: "359514959473",
  appId: "1:359514959473:web:b195adeaadc922f1da35d0",
  measurementId: "G-Z21B8YV9BB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbService = getFirestore(app);
export const authService = getAuth(app);
export const storageService = getStorage(app);
export const analytics = getAnalytics(app);
export default firebase;
