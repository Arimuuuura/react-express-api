const express = require("express");
const request = require("request");
const router = express.Router();

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

const prepareTimestamp = (date) => {
	const year = date.substring(0, 4);
	const month = date.substring(5, 7);
	const day = date.substring(8, 10);
	return `${year}年${month}月${day}日`;
}

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
