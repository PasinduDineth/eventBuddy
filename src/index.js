import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-daterangepicker/daterangepicker.css';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "./store";

const StoreInstance = store();
ReactDOM.render(
    <Provider store={StoreInstance}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
// registerServiceWorker();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
