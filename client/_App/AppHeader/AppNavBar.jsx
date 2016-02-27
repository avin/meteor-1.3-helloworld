import React from 'react';

import { Link, browserHistory } from 'react-router';


export default class extends React.Component {
    render() {
        return (
            <div>
                <Link to="home">Home</Link>
                <Link to="tasks">Tasks</Link>
            </div>
        )
    }
}