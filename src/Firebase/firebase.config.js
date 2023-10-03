// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQ8_eAsqvc3eC3WhkCAg-9bqZnuAzTrd4",
    authDomain: "auth-integration-and-private.firebaseapp.com",
    projectId: "auth-integration-and-private",
    storageBucket: "auth-integration-and-private.appspot.com",
    messagingSenderId: "1080133180994",
    appId: "1:1080133180994:web:219574e20b7797be1e57db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;