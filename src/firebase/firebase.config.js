// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzm9GUQcBdNypxQorM1TwUY_sjzmiMy98",
  authDomain: "ema-john-with-firebase-a-e9d80.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-e9d80",
  storageBucket: "ema-john-with-firebase-a-e9d80.appspot.com",
  messagingSenderId: "266829378070",
  appId: "1:266829378070:web:8dbae8b26fe625dc83fb37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;