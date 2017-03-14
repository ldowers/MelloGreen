import React from "react";
import {Router, Route, hashHistory, IndexRoute} from "react-router";
import Main from "../shared/Main";

import DashboardContainer from "../home/DashboardContainer";
import DistributorsContainer from "../distributors/DistributorsContainer";
import ProductsContainer from "../products/ProductsContainer";
import SalesContainer from "../sales/SalesContainer";

const routeJsx = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="dashboard" component={DashboardContainer} />
            <Route path="distributors" component={DistributorsContainer} />
            <Route path="products" component={ProductsContainer} />
            <Route path="sales" component={SalesContainer} />
            <IndexRoute component={DashboardContainer} />
        </Route>
    </Router>
    );

export {routeJsx};
