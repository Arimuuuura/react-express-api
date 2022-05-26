const express = require("express");
const request = require("request");
const router = express.Router();

const prepareTimestamp = require("../util/getDateTime");

require('dotenv').config()
const API_URL = process.env.API_URL;
const USER = process.env.USER_NAME;

router.get("/api/repos", (req, res) => {
	const repositoryData = repository.response.body.map((repo) => {
		const name = repo.name;
		const description = repo?.description;
		const url = repo?.html_url;
		const language = repo?.language;
		const updated_at = prepareTimestamp(repo.updated_at);
		return {name, description, url, language, updated_at};
	})

	res.send({repositoryData});
});

const repoOptions = {
	url: `${API_URL}/${USER}/repos?per_page=10`,
	method: 'GET',
	json: true,
	headers: {
		'User-Agent': 'request'
	}
}

const repository = request(repoOptions, (error, response, body) => body);

module.exports = router;
