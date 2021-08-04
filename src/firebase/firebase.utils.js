import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




const config={
    apiKey: "AIzaSyDLQ_ONoA93rBo_R3jYjpTuA15pzF_-wkU",
    authDomain: "ecommerce-react-database.firebaseapp.com",
    projectId: "ecommerce-react-database",
    storageBucket: "ecommerce-react-database.appspot.com",
    messagingSenderId: "951483599404",
    appId: "1:951483599404:web:6114a58a35ca643ad19f89",
    measurementId: "G-ZMP206L7FE"
}

firebase.initializeApp(config)

export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});
export const signInWithGoogle  =()=>auth.signInWithPopup(provider);
export default firebase;