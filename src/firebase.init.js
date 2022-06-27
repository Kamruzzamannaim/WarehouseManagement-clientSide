// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbN96cHuzysBQZ-ypW6megVGnV4sQ37hc",
  authDomain: "bike-warehouse-b07ab.firebaseapp.com",
  projectId: "bike-warehouse-b07ab",
  storageBucket: "bike-warehouse-b07ab.appspot.com",
  messagingSenderId: "129449847929",
  appId: "1:129449847929:web:58a8eded75dd7c5fd038a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;