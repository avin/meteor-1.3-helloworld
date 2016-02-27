import React from 'react';
import AccountsUIWrapper from '../../Accounts/AccountsUIWrapper.jsx';

export default class extends React.Component {
    render() {
        return (
            <div>
                APP HEADER || <AccountsUIWrapper />
                <hr/>
            </div>
        )
    }
}