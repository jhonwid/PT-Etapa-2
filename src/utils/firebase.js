import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBLNRvcQ7zU4I44rSBLpnWYqq0lhJLtTLQ",
    authDomain: "etapa2-d5e01.firebaseapp.com",
    projectId: "etapa2-d5e01",
    storageBucket: "etapa2-d5e01.appspot.com",
    messagingSenderId: "690142673994",
    appId: "1:690142673994:web:0ed3d6a75f329bdaf3bab3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Utils
const auth = firebase.auth();

//Exports
export { auth };
