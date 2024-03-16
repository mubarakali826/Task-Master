// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwGOcUmYWFAH5_k6uW5RF-Q1nwdcMHg7w",
    authDomain: "todo-app-25754.firebaseapp.com",
    projectId: "todo-app-25754",
    storageBucket: "todo-app-25754.appspot.com",
    messagingSenderId: "657261116555",
    appId: "1:657261116555:web:f929ef4eb90e351719e88e"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);