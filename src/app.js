import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/configureStore";
import AppRouter, {history} from "./routers/AppRouter";
import {Provider} from "react-redux";
import LoadingPage from './components/LoadingPage'
import {logout} from './actions/auth'
import { PersistGate } from 'redux-persist/es/integration/react'

import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";





const { persistor, store } = configureStore();
const jsx = (
    <Provider store={store}>
      <PersistGate
        loading={<LoadingPage/>}
        persistor={persistor}
      >
          <AppRouter/>
      </PersistGate>
    </Provider>
);


let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));
 console.log(store.getState())

 function select(state) {
    return state.auth.user_id
  }
  
  let user
 
  const handleChange=()=> {
    user= select(store.getState())
        if (user!=="") {
          console.log('oi2')
            store.dispatch(login(user.uid));
            store.dispatch(startSetExpenses()).then(() => {
              renderApp();
              if (history.location.pathname === "/") {
                history.push("/");
              }
            });
          } else {
            store.dispatch(logout());
            renderApp();
            //history.push("/");
          }
  }

  handleChange()
  
  


