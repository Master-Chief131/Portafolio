import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDl6cyNeG1p0wH7ToWvrRMOmFdGtVctyOQ",
    authDomain: "portafolio-e76fa.firebaseapp.com",
    projectId: "portafolio-e76fa",
    storageBucket: "portafolio-e76fa.firebasestorage.app",
    messagingSenderId: "890817433268",
    appId: "1:943108748382:web:d652c48fcd25aac4b3f0cf"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };