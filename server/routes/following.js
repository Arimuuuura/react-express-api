const express = require("express");
const request = require("request")
const router = express.Router();

require('dotenv').config()
const API_URL = process.env.API_URL;
const USER = process.env.USER_NAME;

router.get("/api/following", (req, res) => {
	const data = following.response.body;
	const followingUsers = data.map((user, index) => {
		const avatar_url = user.avatar_url;
		const html_url = user.html_url;
		const login = user.login;

		return {avatar_url, html_url, login}
	});
	res.send({followingUsers});
});

const followingOptions = {
	url: `${API_URL}/${USER}/following?per_page=100`,
	method: 'GET',
	json: true,
	headers: {
		'User-Agent': 'request'
	}
}

const following = request(followingOptions, (error, response, body) => body);

module.exports = router;
