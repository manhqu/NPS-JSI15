import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
// Khởi tạo logic hoạt động web tại đây.
const init = () => {
    console.log("Windows Loaded");
  
    const firebaseConfig = {
      apiKey: "AIzaSyD8atydwtnjqtTai88baRXDQjHbmQ-HFww",
      authDomain: "nps-jsi15-mq.firebaseapp.com",
      projectId: "nps-jsi15-mq",
      storageBucket: "nps-jsi15-mq.appspot.com",
      messagingSenderId: "544603209776",
      appId: "1:544603209776:web:184ae58ecabcfce6cb2df5",
      measurementId: "G-98ET6N7T1J"
    };
    // firebase.(firebaseConfig);
    const app = initializeApp(firebaseConfig);
    // console.log(app().name);initializeApp(firebaseConfig);
  
    // let app = initializeApp
    view.setActiveScreen("homeScreen");
  
  }
  



  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      view.setActiveScreen("homeScreen")
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {

      view.setActiveScreen("loginScreen")
      // User is signed out
      // ...
    }
  });
  
  window.onload = init;


