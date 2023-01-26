import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdjls6Kz-jGbPAWSlT_ExaGrok67MdUyA",
    authDomain: "solutiondb-61ae8.firebaseapp.com",
    projectId: "solutiondb-61ae8",
    storageBucket: "solutiondb-61ae8.appspot.com",
    messagingSenderId: "473257094440",
    appId: "1:473257094440:web:7fc2e7a378f8623a23341d",
    measurementId: "G-RYM093FE5E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();