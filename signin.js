import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDR6bk6QBAVLEWtyM3RtQSClJcw1SXScow",
  authDomain: "thaifinal-f2c2e.firebaseapp.com",
  projectId: "thaifinal-f2c2e",
  storageBucket: "thaifinal-f2c2e.appspot.com",
  messagingSenderId: "452045302889",
  appId: "1:452045302889:web:c3c61e3dc7bf63d215c6f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let formSignIn = document.getElementById("form-signin");
formSignIn.addEventListener("submit", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password);

  localStorage.setItem("displayName", auth.currentUser.displayName);

  alert("Sign In Successfully!");
  window.location.href = "../index.html";
});
