import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Catalog from '../pages/Catalog';
const Routes = () => {
    return (
        <Switch>
            <Route path="/:category/search/:keyword/" component={Catalog} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/detail" component={Detail} />
            <Route path="/" exact component={Home} />
        </Switch>
    );
};

export default Routes;
