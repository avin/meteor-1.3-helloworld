import React from 'react'
import ReactDOM from 'react-dom'

import Routes from './Routes.jsx';

import AppHeader from './AppHeader/AppHeader.jsx';
import AppFooter from './AppFooter/AppFooter.jsx';


export default class extends React.Component {
    render() {
        return (
            <div>
                <AppHeader />

                {this.props.children}

                <AppFooter />
            </div>
        )
    }
};

Meteor.startup(() => {
    ReactDOM.render(<Routes />, document.getElementById('App'));
});