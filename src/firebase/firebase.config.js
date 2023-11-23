// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgyIw9t4Xodze2fSNocmiQwb0HLzU4zSA",
  authDomain: "auth-firebase-react-tailwind.firebaseapp.com",
  projectId: "auth-firebase-react-tailwind",
  storageBucket: "auth-firebase-react-tailwind.appspot.com",
  messagingSenderId: "208271785366",
  appId: "1:208271785366:web:59e4b43f9736d4824bb1b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app