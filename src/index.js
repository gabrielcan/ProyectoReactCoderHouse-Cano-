import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//import Firebase
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFPzVrRC8IxyJh6Wg-6aYNY8WWivYShw0",
  authDomain: "g-shop-cano.firebaseapp.com",
  projectId: "g-shop-cano",
  storageBucket: "g-shop-cano.appspot.com",
  messagingSenderId: "460828048689",
  appId: "1:460828048689:web:5c889c85da52f657b40410"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
