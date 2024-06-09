import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import {
  doc,
  setDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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
const db = getFirestore(app);

const formSignUp = document.getElementById("form-signup");
formSignUp.addEventListener("submit", async (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password);

  updateProfile(auth.currentUser, {
    displayName: firstName + " " + lastName,
  });

  await setDoc(doc(db, "users", auth.currentUser.uid), {
    firstName,
    lastName,
    email,
    password,
  });
localStorage.setItem('displayName',auth.currentUser.displayName)
  alert("Register Successfully!");
  window.location.href = "./signin.html";
});
