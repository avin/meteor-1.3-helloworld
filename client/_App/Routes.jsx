import React from 'react';

import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';

import App from './App.jsx';
import HomePage from '../Home/HomePage.jsx';
import Tasks from '../Tasks/Tasks.jsx';


export default () => (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={HomePage}/>
            <Route path="home" component={HomePage}/>
            <Route path="tasks" component={Tasks}/>
        </Route>
    </Router>
)