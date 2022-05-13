const express = require("express");
const app = express();
const request = require("request");

const PORT = 5000;

app.get("/", (req, res) => {
	res.send("Hello from backend");
});

app.get("/api/github", (req, res) => {
	request(options, (error, response, body) => {
		res.json(body);
	});
});

const options = {
    url: 'https://api.github.com/users/arimuuuura',
    method: 'GET',
	headers: {
		'User-Agent': 'request'
	}
}

app.listen(PORT, () => {
	console.log(`Backend server port ${PORT}... http://localhost:${PORT}`);
});
