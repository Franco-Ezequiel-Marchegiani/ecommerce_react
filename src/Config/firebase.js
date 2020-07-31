import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCwZnDXwI0CUwC9zL55gzeVXV5TM2oXyh4",
    authDomain: "ecommerce-2d68d.firebaseapp.com",
    databaseURL: "https://ecommerce-2d68d.firebaseio.com",
    projectId: "ecommerce-2d68d",
    storageBucket: "gs://ecommerce-2d68d.appspot.com",
    messagingSenderId: "279839586006",
    appId: "1:279839586006:web:f4c3100183322b50c5bb77",
    measurementId: "G-0R3RVHDFSV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  db.settings({
      timestampsInSnapshots: true
  });
  firebase.auth = firebase.auth();
  firebase.db=db;
  
  export default firebase;