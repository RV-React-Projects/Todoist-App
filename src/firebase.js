import firebase from 'firebase';
require('firebase/firestore');

let firebaseConfig = {
	apiKey: 'AIzaSyCVf-xp4dboulFCxQM8JTfQMpWkUpZ9yvw',
	authDomain: 'todoist-app-5d9a7.firebaseapp.com',
	projectId: 'todoist-app-5d9a7',
	storageBucket: 'todoist-app-5d9a7.appspot.com',
	messagingSenderId: '31511269212',
	appId: '1:31511269212:web:a28a0f902d90a219db3b99',
	measurementId: 'G-PKHB7JTMF8'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export { firebaseConfig as firebase, db };
