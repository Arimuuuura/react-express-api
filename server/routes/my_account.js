const express = require("express");
const request = require("request");
const router = express.Router();

router.get("/api/account", (req, res) => {
	const accountData = myAccount.response.body;
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
