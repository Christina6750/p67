import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
        apiKey: "AIzaSyCieKIxFNtgOKzjyJgbS4bv6iQ2aMv5gW4",
        authDomain: "onlinevoting-83b9d.firebaseapp.com",
        databaseURL: "https://onlinevoting-83b9d-default-rtdb.firebaseio.com",
        projectId: "onlinevoting-83b9d",
        storageBucket: "onlinevoting-83b9d.appspot.com",
        messagingSenderId: "164997334076",
        appId: "1:164997334076:web:be9b4acac3a08ca95d6f39",
        measurementId: "G-LEXQ74Q1Z0"
      };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();