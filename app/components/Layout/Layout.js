'use strict';

import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { Sidebar } from './../';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container fluid className="Layout">
				<Container>
					<Grid columns={2}>
						<Grid.Row stretched>
							<Grid.Column width={3}>
								<Sidebar />
							</Grid.Column>

							<Grid.Column width={13}>{this.props.children}</Grid.Column>
						</Grid.Row>
					</Grid>
				</Container>
			</Container>
		);
	}
}
