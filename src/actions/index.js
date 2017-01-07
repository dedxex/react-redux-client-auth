import axios from 'axios';
import { browserHistory } from 'react-router';
import firebase from 'firebase';
//firebase configration
const config = {
    apiKey: "AIzaSyDY-ldthDq7Hl12a0Zr5BecdGnw-a0qYmQ",
    authDomain: "acti-wiki.firebaseapp.com",
    databaseURL: "https://acti-wiki.firebaseio.com",
    storageBucket: "acti-wiki.appspot.com",
    messagingSenderId: "683389749782"
};
firebase.initializeApp(config);
//const ROOT_URL ="https://taranjeet-server.herokuapp.com";
const ROOT_URL ="http://localhost:3000";
export function SignInUser({ email,password }) {
    return function(dispatch) {
        dispatch({ type : 'loading',payload : true });
        axios.post(`${ROOT_URL}/signin`,{ email:email,password: password})
        .then(response=> {
            //if request is good update the state
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then( () => {
                    console.log("firebase okay in signin");
                    dispatch({ type : 'Auth_User' });
                    dispatch({ type : 'loading',payload : false });
                    localStorage.setItem('token',response.data.token);
                    browserHistory.push('/feature');
                })
                .catch((error) => {
                    dispatch({ type : 'loading',payload : false });
                    return dispatch(authError("invalid credentials"));
                });
        })
        .catch((error) => {
        dispatch({ type : 'loading',payload : false });
        dispatch(authError("invalid credentials"));
});
    }}
export function authError(error) {
    return {
    type:"AuthError",
    payload:error
    };
}
export function SignUpUser({email,password}) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signup`,{ email:email,password: password})
            .then(response=> {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        //if request is good update the state
                        console.log("firebase okay in signup");
                        dispatch({ type : 'Auth_User' });
                        localStorage.setItem('token',response.data.token);
                        browserHistory.push('/');
                    })
                    .catch((error) => {
                        //if error
                        dispatch(authError("email is in use"));
                });

            })
            .catch((error) => {
                dispatch(authError("email is in use"));
            });
    }
}
//signout user
export function SignOutUser() {
    return function(dispatch) {
        firebase.auth().signOut().then(function() {
            dispatch({ type : 'DeAuth_User' });
            localStorage.removeItem('token');
        }).catch(function(error) {
            console.log("error while signout from firebase");
        });
    }
}
//fetch message
export function fetchMessage() {
    return function(dispatch) {
        axios.get(ROOT_URL,{
            headers : {
                authorization : localStorage.getItem('token')
            }
        })
            .then(response => {
                console.log(response);
                dispatch({
                    type : "fetch_message",
                    payload : response.data.hi
                });
            });
    }
}
//handling message for not auth and accessing feature
export function youAreNotAuth() {
    return {
        type : 'AuthError',
        payload : "You must Sign in to access"
    };
}
export function clearMessage() {
    return {
        type : 'AuthError',
        payload : ""
    };
}