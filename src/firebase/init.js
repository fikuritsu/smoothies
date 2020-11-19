import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAQ6uiLYE2iZlVSLd6cSWr_rYnoUqffYKY",
    authDomain: "udemy-ninja-smoothies-4748f.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-4748f.firebaseio.com",
    projectId: "udemy-ninja-smoothies-4748f",
    storageBucket: "udemy-ninja-smoothies-4748f.appspot.com",
    messagingSenderId: "206819159361",
    appId: "1:206819159361:web:35af0820f3f482b718c5c0",
    measurementId: "G-Z9TL592T5T"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);

  
  export default firebaseApp.firestore()
  
  //firebase.analytics();