import React from 'react';
import {Router, HashRouter, Route, Switch} from 'react-router-dom';
// import {Router, Route} from 'react-router';
import App from "./App";
import Detail from "./pages/detail"
import HomePage from "./pages/homepage"
import Errors from "./pages/error"
import Register from "./pages/register"
import Favorite from "./pages/favorite"
import SearchMovie from "./pages/searchmovie"
import UpdateMovie from "./pages/updatemovie"
import Recommend from './pages/recommend';
import TopRecommend from './pages/toprecommend';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route exact path="/detail" component={Detail}/>
            <Route exact path="/homepage" component={HomePage}/>
            <Route exact path="/error" component={Errors}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/favorite" component={Favorite}/>
            <Route exact path="/searchmovie" component={SearchMovie}/>
            <Route exact path="/updatemovie" component={UpdateMovie}/>
            <Route exact path="/recommend/:id" component={Recommend}/>
            <Route exact path="/toprecommend/:id" component={TopRecommend}/>
        </Switch>
    </HashRouter>
    
);

export default BasicRoute;