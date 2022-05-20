const express = require("express");
const request = require("request");
const router = express.Router();

const prepareTimestamp = require("../util/getDateTime");

router.get("/api/account", (req, res) => {
	const data = myAccount.response.body;
	const name = data.name;
	const login = data.login;
	const url = data.html_url;
	const location = data.location;
	const created_at = prepareTimestamp(data.created_at);
	const updated_at = prepareTimestamp(data.updated_at);
	const avatar_url = data.avatar_url;
	const accountData = {name, login, url, location, created_at, updated_at, avatar_url};

	res.json({accountData});
});

const myOptions = {
	url: 'https://api.github.com/users/arimuuuura',
	method: 'GET',
	json: true,
	headers: {
		'User-Agent': 'request'
	}
}

const myAccount = request(myOptions, (error, response, body) => body);

module.exports = router;
