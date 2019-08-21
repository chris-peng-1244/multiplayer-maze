const firebase = require('./firebase.js');
require('firebase/auth');

auth();

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