import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AddUserRegisterPersonalDataForm from "../components/AddUserRegisterPersonalDataForm";
import PublicRouter from "./PublicRouter";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={AddUserRegisterPersonalDataForm} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
