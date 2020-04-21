'use strict';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from 'App';

import { Home, Page } from './containers';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Router>
			<App>
				<Switch>
					<Route exact path="/documentation/" component={Home} />
					<Route
						exact
						path="/documentation/:cat-home/"
						render={(props) => {
							return <Home category={props.match.params.cat} />;
						}}
					/>
					<Route
						exact
						path="/documentation/:cat-:topic/"
						render={(props) => {
							return <Page category={props.match.params.cat} topic={props.match.params.topic} />;
						}}
					/>
				</Switch>
			</App>
		</Router>,
		document.querySelector('#app')
	);
});
