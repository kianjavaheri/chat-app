import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDLgFapbBqtMFrHjdE_5cgA49-uQ1HChRk",
    authDomain: "chat-app-faa85.firebaseapp.com",
    projectId: "chat-app-faa85",
    storageBucket: "chat-app-faa85.appspot.com",
    messagingSenderId: "51339626889",
    appId: "1:51339626889:web:cebaf17e835e1058c23958",
    measurementId: "G-ZES720N2KK"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }