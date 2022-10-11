// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCadZ-aBMsfJbMl7LbCOn3wY4tGGBIWX84",
  authDomain: "strong-impulse-350904.firebaseapp.com",
  projectId: "strong-impulse-350904",
  storageBucket: "strong-impulse-350904.appspot.com",
  messagingSenderId: "153813943596",
  appId: "1:153813943596:web:e80cfd00fc184430031889",
  measurementId: "G-SDDJ100SJZ"
};

// Initialize Firebase


if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default firebaseConfig;