
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfd-tqnKUEapTQgbY7MI9YN990lUXJ1G8",
  authDomain: "expodogrulama.firebaseapp.com",
  projectId: "expodogrulama",
  storageBucket: "expodogrulama.appspot.com",
  messagingSenderId: "881207944362",
  appId: "1:881207944362:web:2b3afae0efa1bfa2fc1cd3",
  measurementId: "G-QJ9TSN0NJ5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH= getAuth(FIREBASE_APP);
export const FIRESTORE_DB= getFirestore(FIREBASE_APP);

const analytics = getAnalytics(FIREBASE_APP);