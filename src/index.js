import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import {Provider} from 'react-redux';
import store from './store';


import App from './App';
import NavBar from './components/nav/NavBar'


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
         <Route path="/" component={App} >
             <IndexRoute component={NavBar}/>
         </Route>
        </Router>

    </Provider>,
    document.getElementById('root')
);