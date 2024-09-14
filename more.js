import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBMfKKwgBDu0sv51dsZSuCoXX_ZnTi9zto",
  authDomain: "samajik-4b0d4.firebaseapp.com",
  projectId: "samajik-4b0d4",
  storageBucket: "samajik-4b0d4.appspot.com",
  messagingSenderId: "955210616673",
  appId: "1:955210616673:web:82f245f5f6402f1c7eff20",
  measurementId: "G-LG5DD9HG0S",
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


onAuthStateChanged(auth, (user) => {
  if (user) {
   
    const email = user.email;
    const photoURL = user.photoURL || 'newlogo.jpg'; 

   
    document.getElementById('user-email').textContent = email;
    document.getElementById('profile-pic').src = photoURL;
  } else {
    alert('No user is signed in');
  }
});
