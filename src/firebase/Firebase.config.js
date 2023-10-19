// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWNWuWSs7oxYuMhkgbgOkfn59nghfghg4",
  authDomain: "automotive-assignment-10.firebaseapp.com",
  projectId: "automotive-assignment-10",
  storageBucket: "automotive-assignment-10.appspot.com",
  messagingSenderId: "284013001445",
  appId: "1:284013001445:web:8fd33ee9cfcfdd3771b20c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app