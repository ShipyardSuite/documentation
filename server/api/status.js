'use strict';

const fetch = require('node-fetch');

module.exports = (app, serviceName) => {
	app.get(`/${serviceName}/api/status`, (req, res) => {
		res.json({ success: true, message: `Hello from service "${serviceName}"` });
	});
};
