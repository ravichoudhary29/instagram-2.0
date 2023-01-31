// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKM8pIB0eWpm_yHZYmdWy1V4fZKXslCfg",
  authDomain: "insta-2-yt-edf22.firebaseapp.com",
  projectId: "insta-2-yt-edf22",
  storageBucket: "insta-2-yt-edf22.appspot.com",
  messagingSenderId: "748124939324",
  appId: "1:748124939324:web:e98b6680642e4e4a4fcf39",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
