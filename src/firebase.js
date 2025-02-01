import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl6cyNeG1p0wH7ToWvrRMOmFdGtVctyOQ",
  authDomain: "portafolio-e76fa.firebaseapp.com",
  projectId: "portafolio-e76fa",
  storageBucket: "portafolio-e76fa.firebasestorage.app",
  messagingSenderId: "943108748382",
  appId: "1:943108748382:web:d652c48fcd25aac4b3f0cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };