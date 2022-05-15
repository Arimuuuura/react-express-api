const express = require("express");
const request = require("request")
const router = express.Router();

router.get("/api/following", (req, res) => {
	const followingUsers = following.response.body;
	res.json({followingUsers});
});

const followingOptions = {
	url: 'https://api.github.com/users/Arimuuuura/following?per_page=100',
	method: 'GET',
	json: true,
	headers: {
		'User-Agent': 'request'
	}
}

const following = request(followingOptions, (error, response, body) => body);

module.exports = router;
