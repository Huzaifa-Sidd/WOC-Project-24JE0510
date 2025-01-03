// // Import the functions you need from the SDKs you need

// // import 'firebase/auth';
// import {  initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCpAtJXPJ1ArrhCtalxNHqTk2z27J1X1XY",
//   authDomain: "woc-credentials.firebaseapp.com",
//   projectId: "woc-credentials",
//   storageBucket: "woc-credentials.firebasestorage.app",
//   messagingSenderId: "841955729017",
//   appId: "1:841955729017:web:259be9aaa895e2abffbea8",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const firebase = firebase();





// let logOutBttn = document.querySelector("logOutHidden2"); 
// logOutBttn.onclick=logout();



// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     uid = user.uid;
//     console.log("user :", user);
//     console.log("uid:", uid);

//     // ...
//   } else {
//     // User is signed out
//     // ...
//     console.log("user signed out");
//   }
// });



// Import the functions you need from the SDKs you need
import {  initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpAtJXPJ1ArrhCtalxNHqTk2z27J1X1XY",
  authDomain: "woc-credentials.firebaseapp.com",
  projectId: "woc-credentials",
  storageBucket: "woc-credentials.firebasestorage.app",
  messagingSenderId: "841955729017",
  appId: "1:841955729017:web:259be9aaa895e2abffbea8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firebase = firebase();




import { signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

function logout() {
    signOut(auth)
        .then(() => {
            console.log("User signed out successfully");
        })
        .catch((error) => {
            console.error("Error signing out:", error);
        });
}

let logOutBttn = document.querySelector(".logOutHidden2"); 
console.log(logOutBttn)
logOutBttn.onclick=logout;



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    uid = user.uid;
    console.log("user :", user);
    console.log("uid:", uid);

    // ...
  } else {
    // User is signed out
    // ...
    console.log("user signed out");
  }
});