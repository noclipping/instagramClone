import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDoZ-9qVvTqt8l-ZYOyPbRHdeCnxQDTEwg",
    authDomain: "instagram-b2431.firebaseapp.com",
    projectId: "instagram-b2431",
    storageBucket: "instagram-b2431.appspot.com",
    messagingSenderId: "510199318308",
    appId: "1:510199318308:web:acdbb68752302b9735d5b1"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export {firebase, FieldValue }