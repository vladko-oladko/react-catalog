import React, { Component } from 'react';
import AppProducts from './AppProducts';
import AppItemProduct from './AppItemProduct';
import AppOrder from './AppOrder';
import { Switch, Route} from 'react-router-dom';

export default class Main extends Component {
    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={AppProducts}/>
                    <Route path='/item/:id' component={AppItemProduct}/>
                    <Route path='/order' component={AppOrder}/>
                </Switch>
            </main>
        )
    }
}
