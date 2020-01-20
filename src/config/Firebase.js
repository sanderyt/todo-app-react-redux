import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwlyOrl2haKc4dL-r8g1GtY1cbiP3_pTA",
  authDomain: "todo-react-app-41d94.firebaseapp.com",
  databaseURL: "https://todo-react-app-41d94.firebaseio.com",
  projectId: "todo-react-app-41d94",
  storageBucket: "todo-react-app-41d94.appspot.com",
  messagingSenderId: "1030546593554",
  appId: "1:1030546593554:web:4708365a7677f6c1f985cb"
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
