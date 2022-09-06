// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM-qxXC256NP7MBdNkqTDEafOMrnUhv84",
  authDomain: "clone-ee18b.firebaseapp.com",
  projectId: "clone-ee18b",
  storageBucket: "clone-ee18b.appspot.com",
  messagingSenderId: "436722693803",
  appId: "1:436722693803:web:aaa6fe42bdc1f143ee69ee",
  measurementId: "G-W4BHQLFZHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);