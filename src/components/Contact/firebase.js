import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCQNGJlpMu_0paAXpeo0GYgCHf6DwywADU",
    authDomain: "moon-lander-game.firebaseapp.com",
    projectId: "moon-lander-game",
    storageBucket: "moon-lander-game.appspot.com",
    messagingSenderId: "281059682789",
    appId: "1:281059682789:web:a83ad7760caf856f80e70c"
});

var db = firebaseApp.firestore();

export { db };