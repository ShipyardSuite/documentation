'use strict';

import React from 'react';

import { Card, Menu } from 'semantic-ui-react';

import * as targets from './../../targets';

/**
 * Default class for react Application
 * @class App
 */
export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			items: targets.items
		};
	}

	/**
	 * Renders the current react component.
	 * @method render
	 */
	render() {
		const { category } = this.props;
		const { items } = this.state;

		const thisItem = items.find((item) => item.url == category);

		return (
			<div>
				{category ? (
					<Card.Group>
						{thisItem.children.map((item, i) => {
							return (
								<Card key={i}>
									<Card.Content>
										<Menu vertical secondary>
											<Menu.Item>
												<Menu.Header>{item.title}</Menu.Header>

												<Menu.Menu>
													{item.links.map((link, j) => {
														return (
															<Menu.Item
																key={j}
																name={link.title}
																href={`/documentation/${category}-${link.url}`}
															/>
														);
													})}
												</Menu.Menu>
											</Menu.Item>
										</Menu>
									</Card.Content>
								</Card>
							);
						})}
					</Card.Group>
				) : (
					<div>Home</div>
				)}
			</div>
		);
	}
}
