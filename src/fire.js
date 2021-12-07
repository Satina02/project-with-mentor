import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6aXOYP5rfOegXNvp59cxGVR74TQGd0hA",
    authDomain: "mentor-project-auth.firebaseapp.com",
    projectId: "mentor-project-auth",
    storageBucket: "mentor-project-auth.appspot.com",
    messagingSenderId: "738468879173",
    appId: "1:738468879173:web:bb387a3ff3f2be1a347c2c"
  };

  const fire = firebase.initializeApp(firebaseConfig);


  export default fire; 