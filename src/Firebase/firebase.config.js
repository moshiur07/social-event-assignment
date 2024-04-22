// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDta8R6bTxa0Bqec3RBeaC8K2vY96qMitM",
  authDomain: "social-event-assignment-5c72a.firebaseapp.com",
  projectId: "social-event-assignment-5c72a",
  storageBucket: "social-event-assignment-5c72a.appspot.com",
  messagingSenderId: "525341444558",
  appId: "1:525341444558:web:d9c7cade70e141c8a6839f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth