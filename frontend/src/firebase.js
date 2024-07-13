import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDCSiy_6mxnuVukvL-rfxmMm0JRh1mh1rg",
  authDomain: "jobbeacon-eed5c.firebaseapp.com",
  projectId: "jobbeacon-eed5c",
  storageBucket: "jobbeacon-eed5c.appspot.com",
  messagingSenderId: "121330659509",
  appId: "1:121330659509:web:b4995f7c05e9f625b8cefc",
  measurementId: "G-QRM6GZBE02"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const messaging = firebase.messaging();
