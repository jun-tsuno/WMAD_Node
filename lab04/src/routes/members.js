const router = require('express').Router();
const uuid = require('uuid');
const axios = require('axios');

const members = [
	{ id: uuid.v4(), name: 'Mario', email: 'mario@mail.com' },
	{ id: uuid.v4(), name: 'Luigi', email: 'luigi@mail.com' },
	{ id: uuid.v4(), name: 'Yoshi', email: 'yoshi@mail.com' },
];

router.get('/', (req, res) => res.json(members));

router.get('/:id', async (req, res) => {
	const paramsID = req.params.id;

	const found = members.some((member) => member.id === paramsID);

	if (found) {
		const matchedMember = await members.filter(
			(member) => member.id === paramsID
		);

		res.render('member', { member: matchedMember[0] });
	} else {
		res.status(400).json({ msg: `Member with id: ${paramsID}, is not found ` });
	}
});

router.post('/', (req, res) => {
	const newData = {
		id: uuid.v4(),
		name: req.body.name,
		email: req.body.email,
	};

	members.push(newData);
	res.redirect('/');
	res.json(members);
});

module.exports = router;
