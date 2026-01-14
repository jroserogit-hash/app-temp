import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDdlq71X9a3ZA65q4_sn9FZjyfJZakXDgA",
  authDomain: "app-angular-6331a.firebaseapp.com",
  databaseURL: "https://app-angular-6331a-default-rtdb.firebaseio.com",
  projectId: "app-angular-6331a",
  storageBucket: "app-angular-6331a.appspot.com",
  messagingSenderId: "183868396031",
  appId: "1:183868396031:web:bd32392a2a7bbceb1997ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//REALTIME DATABASE
export const db = getDatabase(app)