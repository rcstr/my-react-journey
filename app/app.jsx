"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hasHistory} from 'react-router';

import Main from './components/Main';

ReactDOM.render(
    <Router history={hasHistory}>
        <Route path="/" component={Main}/>
    </Router>,
    document.getElementById('app')
);