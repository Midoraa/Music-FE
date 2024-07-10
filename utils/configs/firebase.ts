// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from '@firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNNifiIatPAzMZk10jGKGyC1o9MmCP4tA",
    authDomain: "vocal-lamp-428603-a1.firebaseapp.com",
    projectId: "vocal-lamp-428603-a1",
    storageBucket: "vocal-lamp-428603-a1.appspot.com",
    messagingSenderId: "153001624251",
    appId: "1:153001624251:web:7bded85a8f21021e061f9e",
    measurementId: "G-Z98ST63SPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();
export default app;
