// Firebase Configuration (Your Firebase details)
const firebaseConfig = {
  apiKey: "AIzaSyAgqqM-dNfku0tzMTVGsnVSXUxgX3UP5p0",
  authDomain: "govdocapp-f4403.firebaseapp.com",
  projectId: "govdocapp-f4403",
  storageBucket: "govdocapp-f4403.appspot.com",
  messagingSenderId: "892344059520",
  appId: "1:892344059520:web:edcd94a6e9a2f73a98c865",
  measurementId: "G-NL60Z07PLZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const auth = firebase.auth();
const db = firebase.firestore();
