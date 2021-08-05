import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




const config={
    apiKey: "AIzaSyCvddBfTuhmFsRrzkKFlZJCz5LCwiFdOVM",
    authDomain: "ecommerce-1307b.firebaseapp.com",
    projectId: "ecommerce-1307b",
    storageBucket: "ecommerce-1307b.appspot.com",
    messagingSenderId: "1088048206547",
    appId: "1:1088048206547:web:391af6a8dca34e09defa26",
    measurementId: "G-X252VHGKQT"
}

firebase.initializeApp(config)

export const auth=firebase.auth();
export const firestore=firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt': 'select_account'});
export const signInWithGoogle  =()=>auth.signInWithPopup(provider);
export default firebase;


export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return ;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snapShot= await userRef.get();
    // console.log(snapShot);
    // console.log(userRef);

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        }catch (error) {
            console.log('error creating user',error.message)

        }
    }
    return userRef;
}