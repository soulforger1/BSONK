import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"
import "firebase/messaging"
import "firebase/storage"

const config = {
    apiKey: "AIzaSyAXDI6clcCeBFcSvVZzwQGfHvXe97RdB6M",
    authDomain: "bs-bsonk.firebaseapp.com",
    projectId: "bs-bsonk",
    storageBucket: "bs-bsonk.appspot.com",
    messagingSenderId: "259693729848",
    appId: "1:259693729848:web:ec4835a886ab30e407aecd",
    measurementId: "G-2763LTRDTG"
};

export const app = firebase.initializeApp(config);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
