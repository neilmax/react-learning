import React from 'react';
import {Router, HashRouter, Route, Switch} from 'react-router-dom';
// import {Router, Route} from 'react-router';
import App from "./App";
import Detail from "./pages/detail"

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
    
);

export default BasicRoute;