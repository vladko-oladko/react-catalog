import React, { Component } from 'react';
import AppProducts from './AppProducts';
import AppItemProduct from './AppItemProduct';
import AppOrder from './AppOrder';
import AppCompare from './AppCompare';
import AppSignUp from './AppSignUp';
import AppLogin from './AppLogin';
import { Switch, Route } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return(
            <Switch>
                <Route exact path='/' component={AppProducts}/>
                <Route path='/compare' component={AppCompare}/>
                <Route path='/item/:id' component={AppItemProduct}/>
                <Route path='/order' component={AppOrder}/>
                <Route path='/signup' component={AppSignUp}/>
                <Route path='/login' component={AppLogin}/>
            </Switch>
        )
    }
}
