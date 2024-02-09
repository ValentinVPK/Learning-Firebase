import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

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
const colRef = collection(db, "books");

// real time collection data
onSnapshot(colRef, (snapshot) => {
  let books = [];

  snapshot.docs.forEach((doc) => {
    books.push({ ...doc.data(), id: doc.id });
  });

  console.log(books);
});

// adding docs
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    title: addBookForm.title.value,
    author: addBookForm.author.value,
  }).then(() => {
    addBookForm.reset();
  });
});

// deleting docs
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const docRef = doc(db, "books", deleteBookForm.id.value);
  deleteDoc(docRef).then(() => {
    deleteBookForm.reset();
  });
});
