import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAWIaizt4hd46R3xoJszZ8tGScbttjh3cE",
  authDomain: "pinpoint-72dd0.firebaseapp.com",
  projectId: "pinpoint-72dd0",
  storageBucket: "pinpoint-72dd0.appspot.com",
  messagingSenderId: "637064327766",
  appId: "1:637064327766:web:7c3005015e5e1956b0c1f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export { db }
