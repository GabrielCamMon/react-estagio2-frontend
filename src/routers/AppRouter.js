import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import RegisterUser from "../components/RegisterUser";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={RegisterUser} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
