import React from 'react';
import AccountsUIWrapper from '../../Accounts/AccountsUIWrapper.jsx';
import AppNavBar from './AppNavBar.jsx';

export default class extends React.Component {
    render() {
        return (
            <div>
                APP HEADER || <AccountsUIWrapper />

                <AppNavBar />

                <hr/>
            </div>
        )
    }
}