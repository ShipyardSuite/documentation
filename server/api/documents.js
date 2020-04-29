'use strict';

const fetch = require('node-fetch');
const fs = require('fs');

module.exports = (app, logger, serviceName) => {
	app.get(`/${serviceName}/api/document/:category/:file`, async (req, res) => {
		const categoryName = req.params.category;
		const fileName = req.params.file;

		fs.readFile(`./documents/${categoryName.toLowerCase()}/${fileName}.md`, 'utf-8', (err, data) => {
			if (err) {
				logger.error(`File ${fileName}.md not found`);
				res.json({ success: false, message: `File ${fileName}.md not found` });
			} else {
				logger.info(`Markdown document ${fileName}.md parsed`);
				res.json({ success: true, data });
			}
		});
	});
};
