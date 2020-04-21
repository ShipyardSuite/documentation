'use strict';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { Segment } from 'semantic-ui-react';

export default class CodeBlock extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { language, value } = this.props;

		return (
			<Segment style={{ padding: 0 }}>
				<SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>
			</Segment>
		);
	}
}
