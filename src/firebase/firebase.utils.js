import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBN61cRMBOAvCUQZlXVlSnpGjMkKrqvQIU",
    authDomain: "e-com-front.firebaseapp.com",
    databaseURL: "https://e-com-front.firebaseio.com",
    projectId: "e-com-front",
    storageBucket: "e-com-front.appspot.com",
    messagingSenderId: "972377610358",
    appId: "1:972377610358:web:1df1f87e54ca10be3f2757",
    measurementId: "G-LHZNGW99E5"
};

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;