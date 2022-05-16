const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/api/repos", (req, res) => {
	const repositoryData = repository.response.body;
	res.json({repositoryData});
});

const repoOptions = {
	url: 'https://api.github.com/users/Arimuuuura/repos',
	method: 'GET',
	json: true,
	headers: {
		'User-Agent': 'request'
	}
}

const repository = request(repoOptions, (error, response, body) => body);

module.exports = router;
