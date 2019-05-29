import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA-KUl-BDiDNMp0Fhl4sEcOFFjKwI2kFxg",
    authDomain: "review-morocco.firebaseapp.com",
    databaseURL: "https://review-morocco.firebaseio.com",
    projectId: "review-morocco",
    storageBucket: "review-morocco.appspot.com",
    messagingSenderId: "971203411361",
    appId: "1:971203411361:web:b3010acb8d3ca998"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });

export default db;

