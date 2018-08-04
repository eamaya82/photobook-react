import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID
};
firebase.initializeApp(config);

const authentication = firebase.auth();

export function login(user){
    return authentication.signInWithEmailAndPassword(user.email, user.password)
}
export function logout(){
    return authentication.signOut()
}
export function signup(user){
    return authentication.createUserWithEmailAndPassword(user.email,user.password)
}
export let isAuth = new Promise((resolve, reject) => {
  authentication.onAuthStateChanged(user=>{
     return resolve(!!user)
  })
});
