import firebase from "firebase/app";
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCLiwvDmNPu3VKVSNlpykN3e9P5nhc6xpc",
    authDomain: "fir-reactupload-db654.firebaseapp.com",
    projectId: "fir-reactupload-db654",
    storageBucket: "fir-reactupload-db654.appspot.com",
    messagingSenderId: "296457649586",
    appId: "1:296457649586:web:f9be0477e79088c02e78ab",
    measurementId: "G-TR6TEE3V4R"
  };

 firebase.initializeApp(firebaseConfig);

 const storage = firebase.storage();

  export { storage, firebase as dafault };

