const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const noteRouter = require('./routes/note');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// routes
app.use('/note', noteRouter);

app.get('/', (req, res, next) => {
	res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const PORT = 8000;
app.listen(PORT, () => {
	console.log(`Listening on Port ${PORT}`);
});
