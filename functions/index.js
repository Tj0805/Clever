const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
//declaring SDK
const admin = require('firebase-admin');
///initializing app
admin.initializeApp();
/// authentication trigger that creates new user  and id in firestore collection
exports.UserSignUp = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).set({
        email: user.email,
        points: []
    });
});