import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

import { getDoc, setDoc, getFirestore, doc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1G870vngF-Vp6qH8EBNu0d1VODodlScQ",
    authDomain: "crown-clothing-db-227ac.firebaseapp.com",
    projectId: "crown-clothing-db-227ac",
    storageBucket: "crown-clothing-db-227ac.appspot.com",
    messagingSenderId: "117867849158",
    appId: "1:117867849158:web:016217ea938e7070a8fec7"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) =>{

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if ( !userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
     return userDocRef;
  }