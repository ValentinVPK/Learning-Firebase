import { initializeApp } from 'firebase/app'
import {
    getFirestore,
    collection,
    getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCHawIXgHTSn0-DbFlyRNE0XDLVuZY28k4",
  authDomain: "learning-firebase-f88ac.firebaseapp.com",
  projectId: "learning-firebase-f88ac",
  storageBucket: "learning-firebase-f88ac.appspot.com",
  messagingSenderId: "853817116253",
  appId: "1:853817116253:web:223264cceef3afe58a6fb4",
};


//init firebase app
initializeApp(firebaseConfig);

//init services

const db = getFirestore();

// collection ref
const colRef = collection(db, 'books');

// get collection data
getDocs(colRef)
    .then((snapshot) => {
        let books = [];

        snapshot.docs.forEach((doc) => {
           books.push({ ...doc.data(), id: doc.id }) 
        });

        console.log(books);
    })
    .catch(err => {
        console.log(err);
    })