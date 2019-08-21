const firebase = require('firebase/app');
const firebaseConfig = {
  apiKey: "AIzaSyAxGh07V0t-aTi5hvcYKEWOm6Ny-YLIKfg",
  authDomain: "in-the-maze.firebaseapp.com",
  databaseURL: "https://in-the-maze.firebaseio.com",
  projectId: "in-the-maze",
  storageBucket: "",
  messagingSenderId: "492068311936",
  appId: "1:492068311936:web:168d5bb5ff43f728"
};
firebase.initializeApp(firebaseConfig);

module.exports = firebase;