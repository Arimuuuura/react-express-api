const express = require("express");
const app = express();
const request = require("request");
const cors = require("cors");
const PORT = 5000;

app.use(cors())

app.get("/", (req, res) => {
	res.send("Hello from backend");
});

const options = {
	url: 'https://api.github.com/users/arimuuuura',
	method: 'GET',
	json: true,
	headers: {
		'User-Agent': 'request'
	}
}

const github = request(options, (error, response, body) => body);

app.get("/api/github", (req, res) => {
	const accountData = github.response.body;
	res.json({accountData});
});

app.listen(PORT, () => {
	console.log(`Backend server port ${PORT}... http://localhost:${PORT}`);
});
