const Maze = require('amazejs');
const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/firestore');
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
auth();

const size = 5;
const canvas = document.getElementById('maze');
const maze = new Maze.Backtracker(canvas.width/size, canvas.height/size);
maze.generate();

const pen = canvas.getContext('2d');
pen.fillStyle = '#aaa';

for (let row = 0; row < maze.height; row++) {
  for (let col = 0; col < maze.width; col++) {
    if (maze.get(row, col)) {
      pen.fillRect(col *  size, row * size, size, size);
    }
  }
}

function auth() {
  firebase.auth().signInAnonymously().catch(console.error);
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log(user);
    } else {
      console.log('user signed out');
    }
  });
}