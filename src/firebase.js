import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBFgOmkZBJxHfQniLljd6RX9Ec__og_MNc",
  authDomain: "instagram-clone-4fc51.firebaseapp.com",
  projectId: "instagram-clone-4fc51",
  storageBucket: "instagram-clone-4fc51.appspot.com",
  messagingSenderId: "18590257521",
  appId: "1:18590257521:web:c48a3765a2b65f85a626d0",
  measurementId: "G-JL1V0GFLVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase authentication
// eslint-disable-next-line no-unused-vars
export const auth = getAuth(app)