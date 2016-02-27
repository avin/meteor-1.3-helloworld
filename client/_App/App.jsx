import React from 'react'
import ReactDOM from 'react-dom'

import AppHeader from './AppHeader/AppHeader.jsx';
import AppFooter from './AppFooter/AppFooter.jsx';
import HomePage from '../Home/HomePage.jsx';

App = React.createClass({
    render(){
        return (
            <div>
                <AppHeader />
                <HomePage />
                <AppFooter />
            </div>
        )
    }
});

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('App'));
});