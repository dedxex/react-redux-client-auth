import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Route,browserHistory,IndexRoute,Router } from 'react-router';
import reduxThunk from 'redux-thunk';
import App from './components/app';
import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import SignOut from './components/authentication/signout';
import Feature from './components/authentication/feature';
import reducers from './reducers';
import RequireAuthentication from './components/authentication/require_auth';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
if(token) {
    store.dispatch({type : "Auth_User"});
}
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp}></Route>
      <Route path="/signout" component={SignOut}></Route>
      <Route path="/feature" component={RequireAuthentication(Feature)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
