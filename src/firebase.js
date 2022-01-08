import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPt25K17BJ6bgP2sOv_xJHwJStB9WuhY",
  authDomain: "dangan-5544a.firebaseapp.com",
  projectId: "dangan-5544a",
  storageBucket: "dangan-5544a.appspot.com",
  messagingSenderId: "233185299592",
  appId: "1:233185299592:web:6107552963227c5af7233d",
  measurementId: "G-CY9N2C0MM2"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

module.exports db;