import axios from 'axios';
import { browserHistory } from 'react-router';
const ROOT_URL ="https://taranjeet-server.herokuapp.com";
//const ROOT_URL ="http://localhost:3000";
export function SignInUser({ email,password }) {
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signin`,{ email:email,password: password})
        .then(response=> {
            //if request is good update the state
            dispatch({ type : 'Auth_User' });
            localStorage.setItem('token',response.data.token);
            browserHistory.push('/feature');
        })
        .catch((error) => {
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
                console.log(response);
                //if request is good update the state
                dispatch({ type : 'Auth_User' });
                localStorage.setItem('token',response.data.token);
                browserHistory.push('/');
            })
            .catch((error) => {
                dispatch(authError("email is in use"));
            });
    }
}
//signout user
export function SignOutUser() {
    localStorage.removeItem('token');
    return { type : "DeAuth_User" };
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