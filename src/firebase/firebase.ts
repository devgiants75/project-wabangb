import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const envConfig: FirebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY!,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.REACT_APP_FIREBASE_APP_ID!,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID!,
};

// Initialize Firebase
const app = initializeApp({
  apiKey: envConfig.apiKey,
  authDomain: envConfig.authDomain,
  projectId: envConfig.projectId,
  storageBucket: envConfig.storageBucket,
  messagingSenderId: envConfig.messagingSenderId,
  appId: envConfig.appId,
  measurementId: envConfig.measurementId,
});
export const storage = getStorage(app);