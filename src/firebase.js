// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfGb33kjs7gEaljmZnHJI4F4NEnCfOFdI",
    authDomain: "kidz-e-learning.firebaseapp.com",
    projectId: "kidz-e-learning",
    storageBucket: "kidz-e-learning.appspot.com",
    messagingSenderId: "762192583663",
    appId: "1:762192583663:web:2a45f27d872f9bdbe4741a",
    measurementId: "G-1KW1SFJK50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select account "
});
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
// }
function signUp(firstname, lastname, email, phoneNumber, password) {
    return createUserWithEmailAndPassword(auth, email, password, firstname, lastname, phoneNumber);
}
// function logOut() {
//     return signOut(auth);
// }
// function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
// }

// useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
//         console.log("Auth", currentuser);
//         setUser(currentuser);
//     });

//     return () => {
//         unsubscribe();
//     };
// }, []);