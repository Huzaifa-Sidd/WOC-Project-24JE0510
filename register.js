import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


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


//inputs
const email = document.querySelector("#loginEmail").value;
const password = document.querySelector("#loginPassword").value;

//submit
const submit = document.querySelector(".submit1");
submit.addEventListener("click", (event) => {
  event.preventDefault();


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Signing in...");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

});