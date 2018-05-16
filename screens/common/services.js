import * as firebase from "firebase";
import moment from 'moment';
import properties from './properties';

var config = {
    apiKey: "AIzaSyA0sKvxwaj4TBHrQhs-KTjr0qHSlO1Voco",
    authDomain: "sample-albums.firebaseapp.com",
    databaseURL: "https://sample-albums.firebaseio.com",
    projectId: "sample-albums",
    storageBucket: "",
    messagingSenderId: "899978871474"
};

firebase.initializeApp(config);
//let secondApp = firebase.initializeApp(config, "other");

const dataRef = firebase.database().ref();
const albumsRef = dataRef.child('albums');

firebase.auth().onAuthStateChanged(function (user) {

    if (user) {
        properties.authenticate(true);
        properties.setUser(user);
    } else {
        properties.authenticate(false);
        properties.setUser({});
    }

});

export const Store = {

    albumsRef,

    logout: function () {

        firebase.auth().signOut();

    },

    loginUser: function (data) {

        return firebase.auth().signInWithEmailAndPassword(data.user_email, data.user_password)

    },

    registerUser: function (data) {

        //return secondApp.auth().createUserWithEmailAndPassword(data.user_email, data.user_password)
        return firebase.auth().createUserWithEmailAndPassword(data.user_email, data.user_password)

    },

    logoutRegisteredUser: function () {

        //secondApp.auth().signOut();

    },

    saveAlbum: function (data) {

        let date = new moment().format('MMM Do YYYY');
        data.created_on = date;

        return albumsRef.push(data).key

    },

    updateAlbum: function (data, id) {

        let date = new moment().format('MMM Do YYYY');
        data.edited_on = date;

        return albumsRef.child(id).update(data);

    },

    getAlbum: function (id) {

        return albumsRef.child(id);

    },

    deleteAlbum: function (id) {

        return albumsRef.child(id).remove()

    },

}