import firebase from "firebase/app";
import "firebase/auth";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const gitHubprovider = new firebase.auth.GithubAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
const signInWithGitHub = () =>
  // Step 1.
  // User tries to sign in to GitHub.
  auth
    .signInWithPopup(gitHubprovider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = credential.accessToken;

      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

export { auth, signInWithGoogle, signInWithGitHub };
