import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage } from './pages';
import ReactStormpath { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';

import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';

ReactStormpath.init();
ReactDOM.render(
<router history="{createHashHistory({" querykey:="" false="" })}="">
<homeroute path="/" component="{MasterPage}">
<indexroute component="{IndexPage}"/>
<loginroute path="/login" component="{LoginPage}"/>
<route path="/register" component="{RegistrationPage}"/>
<authenticatedroute>
<homeroute path="/profile" component="{ProfilePage}"/>
</authenticatedroute>
</homeroute>
</router>,
document.getElementById('app-container')
);


