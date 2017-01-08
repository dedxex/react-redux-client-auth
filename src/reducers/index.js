import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import AuthReducer from './auth_reducer';
import CollectionReducer from './collection_reducer';
const rootReducer = combineReducers({
  form : form,
  auth : AuthReducer,
  basic : CollectionReducer
});

export default rootReducer;
