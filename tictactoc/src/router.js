import React from 'react';
import {Router, HashRouter, Route, Switch} from 'react-router-dom';
// import {Router, Route} from 'react-router';
import App from "./App";
import Detail from "./pages/detail"
import HomePage from "./pages/homepage"
import Errors from "./pages/error"
import Register from "./pages/register"

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/homepage" component={HomePage}/>
            <Route exact path="/error" component={Errors}/>
            <Route exact path="/register" component={Register}/>
        </Switch>
    </HashRouter>
    
);

export default BasicRoute;