import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyD_RlolWe-5SHS_cRGOPV8p8EGMHsy7w6Y",
    authDomain: "water-quality-prediction-f20f4.firebaseapp.com",
    projectId: "water-quality-prediction-f20f4",
    storageBucket: "water-quality-prediction-f20f4.appspot.com",
    messagingSenderId: "299611933984",
    appId: "1:299611933984:web:437059dbfb82380d8c5b45"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);
export default app;