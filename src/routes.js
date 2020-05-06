import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './pages/home/homeView';
import productList from './pages/products-list/product-list.container';
import Login from './pages/login/login.container';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={productList} />
        </Switch>
    </App> )

export default Routes