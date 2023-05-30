importScripts("https://www.gstatic.com/firebasejs/9.9.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.9.0/firebase-messaging-compat.js");
 
firebase.initializeApp({
    apiKey: "AIzaSyBaoejxFFUKF73iJ2KuqsJajbi7VJ6FSxQ",
    authDomain: "oragonx-development.firebaseapp.com",
    databaseURL: "https://oragonx-development-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "oragonx-development",
    storageBucket: "oragonx-development.appspot.com",
    messagingSenderId: "891862595791",
    appId: "1:891862595791:web:fff8fa1e870e1521395fba"
});
 
const messaging = firebase.messaging();