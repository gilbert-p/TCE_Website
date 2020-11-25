import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { FIREBASE_APIKEY } from "./config/firebase_api";

// Your web app's Firebase configuration
const key = !!FIREBASE_APIKEY == true ? FIREBASE_APIKEY : "";
var firebaseConfig = {
  apiKey: key,
  authDomain: "tce-website-app.firebaseapp.com",
  databaseURL: "https://tce-website-app.firebaseio.com",
  projectId: "tce-website-app",
  storageBucket: "tce-website-app.appspot.com",
  messagingSenderId: "92281284280",
  appId: "1:92281284280:web:ebe6fe95703ee7f122f64d",
  measurementId: "G-M6DRQNM5RX",
};
// Initialize Firebase
// firebase.analytics();
firebase.initializeApp(firebaseConfig);

export default firebase;
