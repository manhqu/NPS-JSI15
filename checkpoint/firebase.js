// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";



// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";




// TODO: Add SDKs for Firebase products that you want to use
//    https:firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8atydwtnjqtTai88baRXDQjHbmQ-HFww",
  authDomain: "nps-jsi15-mq.firebaseapp.com",
  projectId: "nps-jsi15-mq",
  storageBucket: "nps-jsi15-mq.appspot.com",
  messagingSenderId: "544603209776",
  appId: "1:544603209776:web:184ae58ecabcfce6cb2df5",
  measurementId: "G-98ET6N7T1J"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)  