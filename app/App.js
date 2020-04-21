import React from 'react';

import { Layout } from './components/';

/**
 * Default class for react Application
 * @class App
 */
export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	/**
	 * Renders the current react component.
	 * @method render
	 */
	render() {
		return <Layout>{this.props.children}</Layout>;
	}
}
