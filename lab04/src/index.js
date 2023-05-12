const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

/* ---------------------------- setups and config --------------------------- */
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ------------------------------- middleware ------------------------------- */
app.use('/api/members', require('./routes/members'));

app.get('/', async (req, res) => {
	try {
		const response = await axios.get('http://localhost:8000/api/members');
		const membersData = response.data;

		res.render('index', { membersData });
	} catch (error) {
		console.log(error);
		res.status(400).json({ message: 'Error fetching data.' });
	}
});

app.use((req, res) =>
	res.sendFile(path.join(__dirname, '..', 'public', '404.html'))
);

/* -------------------------------- listener -------------------------------- */
const PORT = process.env.PORT || 8000;
app.listen(PORT);
