import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBK2LntkUvYMH2NH00AHbydIoaYpMV5cS4",
    authDomain: "chat-app-9a401.firebaseapp.com",
    projectId: "chat-app-9a401",
    storageBucket: "chat-app-9a401.appspot.com",
    messagingSenderId: "152940242080",
    appId: "1:152940242080:web:c48c8d04b16e8d8465d5c5",
    measurementId: "G-NFJ4WKEJBE"
})

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export {auth, db}