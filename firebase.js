// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwC4Fz2gP30ooUVew8KOfu6QKP5ylvDSw",
  authDomain: "copy-of-insta.firebaseapp.com",
  projectId: "copy-of-insta",
  storageBucket: "copy-of-insta.appspot.com",
  messagingSenderId: "833777838099",
  appId: "1:833777838099:web:3e0d4325665ab6d277f7e6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };