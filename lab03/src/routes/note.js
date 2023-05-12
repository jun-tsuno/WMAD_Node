const router = require('express').Router();
const path = require('path');
const fs = require('fs');

const rootDir = require('../utils/path-helper');

router.get('/', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

router.get('/read', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'read.html'));
});

router.get('/leave', (req, res, next) => {
	res.sendFile(path.join(rootDir, 'views', 'leave.html'));
});
router.post('/leave', (req, res, next) => {
	if (req.body.note === '')
		return res.status(400).send('<p>Please enter something!<p>');

	fs.appendFile(
		path.join(rootDir, 'views', 'read.html'),
		`<li>${req.body.note}</li>`,
		() => {
			res.redirect('/');
		}
	);
});

module.exports = router;
