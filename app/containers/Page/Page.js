'use strict';

import React from 'react';
import Markdown from 'react-markdown';
import { CodeBlock } from './../../components/';
import { Container } from 'semantic-ui-react';
import { NotFound } from './../';

/**
 * Default class for react Application
 * @class App
 */
export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			content: '',
			notFound: false
		};
	}

	componentDidMount() {
		const { category, topic } = this.props;

		document.title = `Documentation - ${category}: ${topic}`;

		fetch(`http://localhost:8080/documentation/api/document/${category}/${topic}`)
			.then((res) => res.json())
			.then((json) => {
				if (json.success) {
					this.setState({ content: json.data });
				} else {
					this.setState({ notFound: true });
				}
			});
	}

	/**
	 * Renders the current react component.
	 * @method render
	 */
	render() {
		const { content, notFound } = this.state;

		return (
			<div>
				{notFound == false ? (
					<Markdown
						source={content}
						renderers={{
							code: CodeBlock
						}}
					/>
				) : (
					<NotFound />
				)}
			</div>
		);
	}
}
