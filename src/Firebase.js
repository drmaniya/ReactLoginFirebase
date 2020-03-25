import firebase from 'firebase';
require('firebase/firestore');
  var firebaseConfig = {
    apiKey: "AIzaSyBlSWaJgaBJ138w4Tf8bycxW_1nq3bOshY",
    authDomain: "react-demo-2f2ee.firebaseapp.com",
    databaseURL: "https://react-demo-2f2ee.firebaseio.com",
    projectId: "react-demo-2f2ee",
    storageBucket: "react-demo-2f2ee.appspot.com",
    messagingSenderId: "649696858319",
    appId: "1:649696858319:web:11374fc0695b5c35"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  export default fb;