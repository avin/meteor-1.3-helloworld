import React from 'react'
import HomePageTitle from './HomePageTitle.jsx'
import HomePageBody from './HomePageBody.jsx'

export default class extends React.Component {
    render() {
        return (
            <div>
                <HomePageTitle />
                <HomePageBody />
            </div>
        )
    }
}