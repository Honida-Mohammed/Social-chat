import { initializeApp } from "firebase/app";
import "firebase/auth";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgLOPm5TRxBMwGZqtEmDd3RRYCLgGlT1k",
  authDomain: "socialchat-f8b7c.firebaseapp.com",
  projectId: "socialchat-f8b7c",
  storageBucket: "socialchat-f8b7c.appspot.com",
  messagingSenderId: "1058194803623",
  appId: "1:1058194803623:web:e4f9cef21d675e97ca4482",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);

//   import { getAuth } from "firebase/auth";

//   const auth = getAuth();


// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();

// import { getAuth, signInWithRedirect } from "firebase/auth";

// const auth = getAuth();
// signInWithRedirect(auth, provider);