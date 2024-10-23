// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH0HsnQ4q16mkmGQ1yT7jpR0wyWyPlTx0",
  authDomain: "techstore-e3e5a.firebaseapp.com",
  projectId: "techstore-e3e5a",
  storageBucket: "techstore-e3e5a.appspot.com",
  messagingSenderId: "181227137921",
  appId: "1:181227137921:web:2f23e4ee7fdf1258d09680",
  measurementId: "G-CM2P36F78C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dbFirebase = getFirestore(app);
