import React from "react";
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import SingUp from "../components/SingUp/SingUpData";
import EditProfilePage from "../components/Edit/EditProfilePage";
import PublicHome from "../components/Home/PublicHome";
import SingIn from "../components/SingIn/SingIn";
import PublicRoute from "./PublicRouter"
import PrivateRoute from "./PrivateRoute"
import PrivateHome from "../components/Home/PrivateHome";
import NotFoundPage from "../components/NotFoundPage"
import PublicRouterHome from "./PublicRouterHome";


export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRouterHome exact path="/" component={PublicHome}/>
                <PrivateRoute path="/home" component={PrivateHome}/>
                <PublicRoute path="/user/singin"
                    component={SingIn}/>
                <PublicRoute path="/user/create"
                    component={SingUp}/>
                <PrivateRoute path="/user/edit/profile/:id"
                    component={EditProfilePage}/>
                    <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
