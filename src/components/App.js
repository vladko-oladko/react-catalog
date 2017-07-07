import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Main from './Main';
import AppSideBar from './AppSideBar'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <AppSideBar/>
                <Main/>
            </div>
        );
    }
}
