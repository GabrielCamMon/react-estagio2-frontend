import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import usersReduce from "../reducers/users";
import authReduce from "../reducers/auth";
import projectReduce from "../reducers/projects"
import {persistStore, persistCombineReducers} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const config ={
    key:'root',
    storage,
    debug:true
  };
  const store = createStore(
    persistCombineReducers(config,{
      users: usersReduce,
      auth: authReduce,
      projects: projectReduce
    }),
    composeEnhancers(applyMiddleware(thunk))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  const persistor = persistStore(store);

  return { persistor, store };
};
