import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyAAl-klQyX2Ckbf7XtR3uPnKb-f-yC-FMc",
  authDomain: "infakpro-e046d.firebaseapp.com",
  databaseURL:
    "https://infakpro-e046d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "infakpro-e046d",
  storageBucket: "infakpro-e046d.appspot.com",
  messagingSenderId: "794337216708",
  appId: "1:794337216708:web:86ccedf4e32cd31bdc2191",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getDatabase(app);
