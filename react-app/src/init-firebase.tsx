// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuIloyHiVem2ZoC9AZSyO_033Cb5jZtBs",
    authDomain: "karl-tilsner.firebaseapp.com",
    projectId: "karl-tilsner",
    storageBucket: "karl-tilsner.firebasestorage.app",
    messagingSenderId: "721661094361",
    appId: "1:721661094361:web:ca1561f333b066213511c8",
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);

// Initialise Firestore
const db = getFirestore(app);

export { db };
