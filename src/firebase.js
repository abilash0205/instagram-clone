import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  YOUR_API_KEY,
  YOUR_AUTH_DOMAIN,
  YOUR_PROJECT_ID,
  YOUR_STORAGE_BUCKET,
  YOUR_MESSAGING_SENDER_ID,
  YOUR_APP_ID,
  YOUR_MEASUREMENT_ID,
} from "../config";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTH_DOMAIN,
  projectId: YOUR_PROJECT_ID,
  storageBucket: YOUR_STORAGE_BUCKET,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  appId: YOUR_APP_ID,
  measurementId: YOUR_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication
// eslint-disable-next-line no-unused-vars
export const auth = getAuth(app);
