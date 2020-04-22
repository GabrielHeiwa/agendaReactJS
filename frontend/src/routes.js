import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/" exact component ={Home} />
            </Switch>
        </BrowserRouter>
    );
}