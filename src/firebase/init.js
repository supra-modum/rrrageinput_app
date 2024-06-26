// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpLdaeameYYZjpPbKXPwt8Tqz13jFJlJQ",
  authDomain: "rrrageinput.firebaseapp.com",
  projectId: "rrrageinput",
  storageBucket: "rrrageinput.appspot.com",
  messagingSenderId: "11009723689",
  appId: "1:11009723689:web:2231f4643b6b266e2f7b38",
  measurementId: "G-ZDE4SMJ1ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
