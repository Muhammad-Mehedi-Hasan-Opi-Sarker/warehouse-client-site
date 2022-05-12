import {getAuth} from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQEd90fJ0i9MYgAyXCLhYanU7XW-MHD7w",
  authDomain: "warehouse-356bc.firebaseapp.com",
  projectId: "warehouse-356bc",
  storageBucket: "warehouse-356bc.appspot.com",
  messagingSenderId: "433978948501",
  appId: "1:433978948501:web:5fd2318b5ad55dcc66d49c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth