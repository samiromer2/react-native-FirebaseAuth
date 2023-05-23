// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyABC_-5YrhpyLBMi_Ib0UmR6d0f31Aku2w",

  authDomain: "react-native-authenticat-8455d.firebaseapp.com",

  projectId: "react-native-authenticat-8455d",

  storageBucket: "react-native-authenticat-8455d.appspot.com",

  messagingSenderId: "556415338403",

  appId: "1:556415338403:web:877e149f25ce6735ca3c16",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);