// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFBrwtnWSlBsVyn9JkUPQ8Kv-qCVnAV9A",
  authDomain: "balmy-platform-423519-j4.firebaseapp.com",
  projectId: "balmy-platform-423519-j4",
  storageBucket: "balmy-platform-423519-j4.firebasestorage.app",
  messagingSenderId: "825233968869",
  appId: "1:825233968869:web:bbc4c065c3c28b08254e0c",
  measurementId: "G-H9ST35XH3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db }

export default app