const express = require("express");
const request = require("request")
const router = express.Router();

router.get("/api/followers", (req, res) => {
	const followerUsers = followers.response.body;
	res.json({followerUsers});
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
