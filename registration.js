// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq7h8zXZKtIwINPOYw3PxeURGtUZQ1pVk",
  authDomain: "marshall-database.firebaseapp.com",
  projectId: "marshall-database",
  storageBucket: "marshall-database.appspot.com",
  messagingSenderId: "1087086366800",
  appId: "1:1087086366800:web:3cbfbfdefd92b9583dc155",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementById("btn1");

submit.addEventListener("click", function (event) {
  event.preventDefault();

  const user = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      window.location.href = "dashboard.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const database = firebase.database();

// // set-up registration function

// function registration() {
//   user = document.getElementById("username").value;
//   email = document.getElementById("email").value;
//   password = document.getElementById("password").value;

//   // validate input field
//   if (validate_email(email) == false || validate_password(password) == false) {
//     alert("Email or Password is Incorrect!");
//     return;
//   }
//   if (validate_user(user) == false) {
//     alert("Invalid Username!");
//     return;
//   }

//   //   move on with auth
//   auth
//     .createUserWithEmailAndPassword(email, password)
//     .then(function () {
//       var user = auth.currentUser;
//       var database_ref = database.ref();

//       var user_data = {
//         email: email,
//         user: user,
//       };
//       database_ref.child("users/" + user.uid).set(user_data);

//       alert("user created!");
//     })
//     .catch(function (error) {
//       var error_code = error.code;
//       var error_message = error.message;
//       alert(error_message);
//     });
// }

