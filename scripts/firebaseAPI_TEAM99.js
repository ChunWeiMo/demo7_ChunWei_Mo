//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAsJTEtOrSfF-s5DNLftk851X2uPchtRHs",
    authDomain: "fir-comp1800-mo.firebaseapp.com",
    projectId: "fir-comp1800-mo",
    storageBucket: "fir-comp1800-mo.appspot.com",
    messagingSenderId: "260626118072",
    appId: "1:260626118072:web:8341e9765cd764c4ca4b4d"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();