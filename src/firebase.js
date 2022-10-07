import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminpanelp.firebaseapp.com",
  projectId: "adminpanelp",
  storageBucket: "adminpanelp.appspot.com",
  messagingSenderId: "942016452816",
  appId: "1:942016452816:web:89ec67545a62c98ed666d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
