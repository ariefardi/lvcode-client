import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyB_v1xTx16ec7IthGuufuvAcAZwY0JWxP8",
    authDomain: "e-commerce-150bb.firebaseapp.com",
    databaseURL: "https://e-commerce-150bb.firebaseio.com",
    projectId: "e-commerce-150bb",
    storageBucket: "e-commerce-150bb.appspot.com",
    messagingSenderId: "416430460078"
  };
  firebase.initializeApp(config);

  export const storageRef = firebase.storage()