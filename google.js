import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyDR6bk6QBAVLEWtyM3RtQSClJcw1SXScow",
  authDomain: "thaifinal-f2c2e.firebaseapp.com",
  projectId: "thaifinal-f2c2e",
  storageBucket: "thaifinal-f2c2e.appspot.com",
  messagingSenderId: "452045302889",
  appId: "1:452045302889:web:c3c61e3dc7bf63d215c6f8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

let signInButton = document.getElementById("signInButton");
// let signOutButton = document.getElementById("signOutButton");
// let message = document.getElementById("message");
// let username = document.getElementById("username");
// let userEmail = document.getElementById("userEmail");
// let imageGoogle = document.getElementById("imageGoogle");
let signInGoogle = document.getElementById("signInWithGoogle");

// signOutButton.style.display = "none";
// message.style.display = "none";

function signInWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

function signOutUser() {
  signOut(auth)
    .then(() => {
      alert("sign out ok!");
      window.location.reload();
    })
    .catch((error) => {
      // An error happened.
    });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    signInButton.style.display = "none";
    // message.style.display = "block";
    // signOutButton.style.display = "block";

    username.innerHTML = user.displayName;
    userEmail.innerHTML = user.email;
    imageGoogle.src = user.photoURL;
  }
});

signInGoogle.addEventListener("click", signInWithGoogle);
// signOutButton.addEventListener("click", signOutUser);
