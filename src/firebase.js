// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env)
const firebaseConfig = {
    apiKey:"AIzaSyAFAPqtfBeLhz-1Hfc7S2GEeBdcc0PXobY",
    authDomain:"auth-example-fd07d.firebaseapp.com",
    projectId:"auth-example-fd07d",
    storageBucket:"auth-example-fd07d.appspot.com",
    messagingSenderId: "402851259002",
    appId:"1:402851259002:web:7cb739aa73a98cd5fd51c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);