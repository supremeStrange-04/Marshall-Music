// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
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

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
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