import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyBW-zoN9_5FAkyHh-PALw9_kXbLU_K7i6I",
    authDomain: "xupsell-24761.firebaseapp.com",
    projectId: "xupsell-24761",
    storageBucket: "xupsell-24761.appspot.com",
    messagingSenderId: "475599162479",
    appId: "1:475599162479:web:44355300bd91c535b4d19a",
    measurementId: "G-XQN1ZGBF76"
  };
const messaging = firebase.messaging();
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
