import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD1gFkl3wMiWwL17ZuCnlC1lWB9sVkFDKA",
  authDomain: "pizzeria-paca.firebaseapp.com",
  databaseURL: "https://pizzeria-paca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pizzeria-paca",
  storageBucket: "pizzeria-paca.appspot.com",
  messagingSenderId: "369844531153",
  appId: "1:369844531153:web:7644f4b2ff4c13d4a43af0",
  measurementId: "G-SB05XPMF8C"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);