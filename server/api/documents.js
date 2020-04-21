'use strict';

const fetch = require('node-fetch');
const fs = require('fs');

module.exports = (app, serviceName) => {
	app.get(`/${serviceName}/api/document/:category/:file`, async (req, res) => {
		const categoryName = req.params.category;
		const fileName = req.params.file;

		fs.readFile(`./documents/${categoryName.toLowerCase()}/${fileName}.md`, 'utf-8', (err, data) => {
			if (err) {
				res.json({ success: false, message: 'File not found...' });
			} else {
				res.json({ success: true, data });
			}
		});
	});
};
