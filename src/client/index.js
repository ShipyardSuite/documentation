import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import { Layout } from './components';
import { Overview, NotFound } from './containers';

document.addEventListener('DOMContentLoaded', () => 
{

    ReactDOM.render(
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="*/overview" component={Overview} />
                    <Route exact path="*/docs/category" component={Overview} />
                    <Route exact path="*/docs/category/document" component={Overview} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>,
        document.querySelector('#app')
    );
});
