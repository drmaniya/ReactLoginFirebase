import firebase from 'firebase';
require('firebase/firestore');
  var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export default fb;
