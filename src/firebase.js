import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9v8fzyuWMacfkGM1SZMvgDuqrkVqWX7w",
    authDomain: "react-blogs-app-47419.firebaseapp.com",
    projectId: "react-blogs-app-47419",
    storageBucket: "react-blogs-app-47419.appspot.com",
    messagingSenderId: "64087697619",
    appId: "1:64087697619:web:c967fb11fde2fb920ecc26"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };