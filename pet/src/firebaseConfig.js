import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6-UPECfd8TVsqrKUnpzY7tfIqxB4XXk0",
  authDomain: "pawsparadise-e9aff.firebaseapp.com",
  projectId: "pawsparadise-e9aff",
  storageBucket: "pawsparadise-e9aff.firebasestorage.app",
  messagingSenderId: "353620563838",
  appId: "1:353620563838:web:06b050103364f5274d852f",
  measurementId: "G-BY0MY8MD2L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
