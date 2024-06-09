import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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

document.addEventListener("DOMContentLoaded", () => {
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("displayName");
  };
  onAuthStateChanged(auth, (user) => {
    const inforElement = document.getElementById("information");
    const displayName = localStorage.getItem("displayName");
    if (user) {
      const displayName = user.displayName || "User";
      inforElement.innerHTML = ` 
                <div>
                    <span class='hello'>Hello, </span>
                    <span id="displayName">${displayName}</span>
                    <button id='buttonSignOut'>Sign out</button>
                </div>
                `;
      const buttonSignOut = document.getElementById("buttonSignOut");
      buttonSignOut.addEventListener("click", handleSignOut);
    } else if (displayName) {
      inforElement.innerHTML = `
        <div>
          <span class="hello">Welcome, </span>
          <span id="displayName">${displayName}</span>
          <button id="buttonSignOut">Sign out</button>
        </div>
      )`;
      const buttonSignOut = document.getElementById("buttonSignOut");
      buttonSignOut.addEventListener("click", handleSignOut);
    } else {
      inforElement.innerHTML = `
            <div class='signin'>
                <a href="../pages/signin.html">
                <div class="footer-column-title"></div>
                </a>
           </div>
       `;
    }
  });
});
