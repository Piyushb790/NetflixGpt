// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ_ZRfR8fpImFgEQBmVRmByGX5JKHqrPs",
  authDomain: "netflix-gpt-piyush.firebaseapp.com",
  projectId: "netflix-gpt-piyush",
  storageBucket: "netflix-gpt-piyush.appspot.com",
  messagingSenderId: "497530768125",
  appId: "1:497530768125:web:10ed1eb7697e8c62a28c94",
  measurementId: "G-DHN04G6SS7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
