import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

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

let formForgetPass = document.getElementById('forget_password')
formForgetPass.addEventListener("submit", function(event){
    event.preventDefault();
    let email = document.getElementById("email").value;

    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Passwword reset email sent
    alert("Password reset email sent. Please check your email inbox!")
    window.location.href = "./pages/signin.html"
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})