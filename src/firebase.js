import firebase from 'firebase'
// Your web app's Firebase configuration
// ======= Also a firebase file available in public folder and that is global file and also some code are available in App.js file 
var firebaseConfig = {
    apiKey: "AIzaSyAe8nI6i7Q70gmk32jGljLlKT-r5dEw0pQ",
    authDomain: "pwa-app-8363b.firebaseapp.com",
    //databaseURL: "https://pwa-app-ccb69.firebaseio.com",
    projectId: "pwa-app-8363b",
    storageBucket: "pwa-app-8363b.appspot.com",
    messagingSenderId: "913280759850",
    appId: "1:913280759850:web:b6f04e81317a66498d6b53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase