import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCSiy_6mxnuVukvL-rfxmMm0JRh1mh1rg",
  authDomain: "jobbeacon-eed5c.firebaseapp.com",
  projectId: "jobbeacon-eed5c",
  storageBucket: "jobbeacon-eed5c.appspot.com",
  messagingSenderId: "121330659509",
  appId: "1:121330659509:web:b4995f7c05e9f625b8cefc",
  measurementId: "G-QRM6GZBE02"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
