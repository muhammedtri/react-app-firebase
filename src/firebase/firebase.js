import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCtWB2WfnAFi9HRshxTTdSIRQpEUfa4Fvw",
  authDomain: "budgetracker1990.firebaseapp.com",
  projectId: "budgetracker1990",
  storageBucket: "budgetracker1990.appspot.com",
  messagingSenderId: "345225597780",
  appId: "1:345225597780:web:ae9bf896114f4e8d42aec1",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app)
