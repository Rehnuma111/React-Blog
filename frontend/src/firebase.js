// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getStorage} from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: "AIzaSyBSmT9hId0OVBaTLIyweS36wwgYqxPorb4",
//   authDomain: "blog-file-575ee.firebaseapp.com",
//   projectId: "blog-file-575ee",
//   storageBucket: "blog-file-575ee.appspot.com",
//   messagingSenderId: "300021125233",
//   appId: "1:300021125233:web:9ad2f70b2b6b8f3517cbd0",
//   measurementId: "G-25HB50XRL8",
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);
// export const storage = getStorage();


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSmT9hId0OVBaTLIyweS36wwgYqxPorb4",
  authDomain: "blog-file-575ee.firebaseapp.com",
  projectId: "blog-file-575ee",
  storageBucket: "blog-file-575ee.appspot.com",
  messagingSenderId: "300021125233",
  appId: "1:300021125233:web:9ad2f70b2b6b8f3517cbd0",
  measurementId: "G-25HB50XRL8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();
const auth = getAuth();
export {app};