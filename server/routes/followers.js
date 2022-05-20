const express = require("express");
const request = require("request")
const router = express.Router();

router.get("/api/followers", (req, res) => {
	const data = followers.response.body;
	const followerUsers = data.map((user, index) => {
		const avatar_url = user.avatar_url;
		const html_url = user.html_url;
		const login = user.login;

		return {avatar_url, html_url, login}
	});
	res.send({followerUsers});
});

const followersOptions = {
	url: 'https://api.github.com/users/Arimuuuura/followers?per_page=100',
	method: 'GET',
	json: true,
	headers: {
		'User-Agent': 'request'
	}
}

const followers = request(followersOptions, (error, response, body) => body);

module.exports = router;
