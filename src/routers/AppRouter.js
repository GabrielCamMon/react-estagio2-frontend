import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import RegisterUser from "../components/SingUp/RegisterUser";
import SingUp from "../components/SingUp/SingUpData";
import AddUserRegisterPersonalData from "../components/SingUp/AddUserRegisterPersonalData";
import AddUserRegisterDocumentData from "../components/SingUp/AddUserRegisterDocumentData";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/createuser" component={RegisterUser} />
        <Route path="/createuser/step1" component={SingUp} />
        <Route
          path="/createuser/step2"
          component={AddUserRegisterPersonalData}
        />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
