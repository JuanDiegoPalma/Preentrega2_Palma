import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1qEsi8_rJM9eKM7w8xy4t2S57DpmWtJk",
    authDomain: "ramp-roll.firebaseapp.com",
    projectId: "ramp-roll",
    storageBucket: "ramp-roll.firebasestorage.app",
    messagingSenderId: "39129863098",
    appId: "1:39129863098:web:8cec7ec0fff8ea0cc88383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getFirestore()

export default db