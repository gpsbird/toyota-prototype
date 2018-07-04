import firebase from 'firebase'
import ReduxSagaFirebase from 'redux-saga-firebase';

let config = {
    apiKey: "AIzaSyCX3Mlnu9L66E_uJJ4EGEif7BV_BwUI4f0",
    authDomain: "toyota-kenya.firebaseapp.com",
    databaseURL: "https://toyota-kenya.firebaseio.com",
    projectId: "toyota-kenya",
    storageBucket: "toyota-kenya.appspot.com",
    messagingSenderId: "925918218301"
};

const main = firebase.initializeApp(config);
//let secondApp = firebase.initializeApp(config, "other");

const rsf = new ReduxSagaFirebase(main);

export default rsf
