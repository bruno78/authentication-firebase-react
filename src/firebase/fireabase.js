/**
 * The file where all the configuration goes that you have seen 
 * previously on your Firebase dashboard. In addition, Firebase itself 
 * will be instantiated in this file.
 */ 

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAzbISDb7EJ7cg2-yGohDV6CgBw1PYl1t8",
    authDomain: "authentication-proj-3.firebaseapp.com",
    databaseURL: "https://authentication-proj-3.firebaseio.com",
    projectId: "authentication-proj-3",
    storageBucket: "authentication-proj-3.appspot.com",
    messagingSenderId: "218309514009"
};

// If firebase hasn't initialized yet, initialize it with config.
if(!firebase.apps.length) {
    firebase.initializeApp(config)
}

const auth = firebase.auth();

export { auth, };