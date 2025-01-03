// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
// import {
//   getFirestore,
//   doc,
//   getDoc,
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
// } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
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
// const db = getFirestore();
// const db1111 = getDatabase();
// const auth = getAuth(app);
// const dbref = ref(db1111);

// //inputs
// const email = document.querySelector("#loginEmail").value;
// const password = document.querySelector("#loginPassword").value;

// //submit
// const submit = document.querySelector(".submit1");
// submit.addEventListener("click", (event) => {
//   event.preventDefault();
//   //inputs
//   const email = document.querySelector("#loginEmail").value;
//   const password = document.querySelector("#loginPassword").value;

//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then(async (userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       get(child(dbref, 'UsersAuthList/' + credentials.user.uid)).then((snapshot)=>{
//         if(snapshot.exists){
//           sessionStorage.setItem("user-info", JSON.stringify({
//             firstname: snapshot.val().firstname,
//             lastname: snapshot.val().lastname
//           }))
//           sessionStorage.setItem("user-creds", JSON.stringify(userCredential.user));
          
//         }
//       })
//       // ...
//       alert("Logging in...");
//       // ...

//       // var ref = doc(db, "UserAuthList", userCredential.user.uid);
//       // const docSnap = await getDoc(ref);

//       // if(docSnap.exists()){
//       //   sessionStorage.setItem("user-info", JSON.stringify({
//       //     firstname: docSnap.data().firstname,
//       //     lastname: docSnap.data().lastname
//       //   }))
//       //   sessionStorage.setItem("user-creds", JSON.stringify(userCredential.user));
//       //   window.location.href = "home.html";
//       // }
//     })

//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       // ..
//     });
// });
