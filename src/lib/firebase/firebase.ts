import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  // apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  // authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  apiKey: "AIzaSyAgpIRJApFTmBQwD1MSaXiL-7IePLAkmIc",
  authDomain: "skyscopeapp.firebaseapp.com",
  projectId: "skyscopeapp",
  storageBucket: "skyscopeapp.appspot.com",
  messagingSenderId: "698546988735",
  appId: "1:698546988735:web:869b5bb85c14c61279080a"
};

const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const firebaseAuth = getAuth();

export { firebaseApp, firebaseAuth };

