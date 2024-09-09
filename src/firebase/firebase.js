// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWg3K560HHemb5Ij-9KSrCyukfw12U-18",
  authDomain: "wabang-e73e0.firebaseapp.com",
  projectId: "wabang-e73e0",
  storageBucket: "wabang-e73e0.appspot.com",
  messagingSenderId: "447540939701",
  appId: "1:447540939701:web:af7d6871648f7fe013e7fc",
  measurementId: "G-87N865MFQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);