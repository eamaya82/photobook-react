import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINSENDERID
}
firebase.initializeApp(config)

const authentication = firebase.auth()
const storage = firebase.storage()
const database = firebase.database()

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
})
export let userInfo = new Promise((resolve, reject) => {
    authentication.onAuthStateChanged(user=>{
       return resolve(user)
    })
  });
export function upload(file){
    return storage.ref('/images').child(Date.now().toString()).put(file)
}


export function create(collection, obj){
    return database.ref(collection).push(obj)
} 
export function remove(collection, id){
    return database.ref(collection).child(id).remove()
} 
export function list(collection){
    return database.ref(collection)
} 
export function read(collection, id){
    return database.ref(collection+"/"+id)
} 
