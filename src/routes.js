import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './pages/home/homeView';
import Login from './pages/login/login.container';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/" component={Login} />
        </Switch>
    </App> )

export default Routes