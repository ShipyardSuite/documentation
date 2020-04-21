'use strict';

import React from 'react';
import { Menu } from 'semantic-ui-react';

import * as targets from './../../targets';

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: targets.items
		};
	}

	render() {
		const { items } = this.state;

		return (
			<Menu vertical secondary>
				{items.map((item, i) => {
					return <Menu.Item key={i} name={item.title} href={`/documentation/${item.url}-home`} />;
				})}
			</Menu>
		);
	}
}
