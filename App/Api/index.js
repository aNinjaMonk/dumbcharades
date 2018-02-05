import { AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// import { AdMobInterstitial } from 'react-native-admob';
import firebase, { auth, database } from 'firebase';

export function init() {
  var config = {
    apiKey: "AIzaSyBLYtgXaGtbKMcTYTNnjLl2EnjQlrAtjjw",
    authDomain: "dumbcharades-6a935.firebaseapp.com",
    databaseURL: "https://dumbcharades-6a935.firebaseio.com",
    projectId: "dumbcharades-6a935",
    storageBucket: "dumbcharades-6a935.appspot.com",
    messagingSenderId: "645254718890"
  };

  firebase.initializeApp(config);
}

export function firebaseLogin(accessToken) {
  const creds = auth.FacebookAuthProvider.credential(accessToken);

  return auth().signInWithCredential(creds);
}

export function login(token) {
  return firebaseLogin(token);
}

export function logout() {
  auth().signOut();
}

export function getUser(id) {
  const ref = database().ref(`users/facebook:${id}`);
  return ref.once('value');
}

export function saveUser(val) {
  const ref = database().ref('users').child(`facebook:${val.fbId}`);
  ref.set(val);
}
