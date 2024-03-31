

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg1mZNTxIxyHYzKsbcm0k8hiKV321vKhI",
  authDomain: "usher-email-password.firebaseapp.com",
  projectId: "usher-email-password",
  storageBucket: "usher-email-password.appspot.com",
  messagingSenderId: "1089072079480",
  appId: "1:1089072079480:web:f58cb3553edb230a1e438d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;