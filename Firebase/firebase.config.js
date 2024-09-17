// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaW0tACQlvjWX7EbfMpJKVc3pxQJnt0MU",
  authDomain: "wands-and-crafts.firebaseapp.com",
  projectId: "wands-and-crafts",
  storageBucket: "wands-and-crafts.appspot.com",
  messagingSenderId: "808760747584",
  appId: "1:808760747584:web:739df64fd43acda1cfa1a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;