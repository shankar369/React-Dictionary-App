import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAD_kl-enFqLd7EdG7UghRTd6-NS0evTyM",
  authDomain: "dictionary-f5913.firebaseapp.com",
  databaseURL: "https://dictionary-f5913.firebaseio.com",
  projectId: "dictionary-f5913",
  storageBucket: "dictionary-f5913.appspot.com",
  messagingSenderId: "661838218335",
  appId: "1:661838218335:web:ac516c7044d60bb17107ea",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
