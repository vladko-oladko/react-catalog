import React, { Component } from 'react';
import AppHeader from './AppHeader';
import Main from './Main';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <Main/>
            </div>
        );
    }
}
