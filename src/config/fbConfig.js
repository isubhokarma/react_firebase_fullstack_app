import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCwk78LP5GyXItbIZZA1gR-nxV5oYak0Uo",
  authDomain: "planner1-b7041.firebaseapp.com",
  databaseURL: "https://planner1-b7041.firebaseio.com",
  projectId: "planner1-b7041",
  storageBucket: "planner1-b7041.appspot.com",
  messagingSenderId: "949127767490",
  appId: "1:949127767490:web:96d86d9df85d7e40"
};

// Initialize Firebase
firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
