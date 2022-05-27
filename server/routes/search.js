const express = require("express");
const request = require("request");
const router = express.Router();

require('dotenv').config()
const API_URL = process.env.API_URL;

const prepareTimestamp = require("../util/getDateTime");

let GEST;

router.get("/api/search", (req, res) => {
	GEST = req.query.user;
	const data = gestAccount.response.body;
	res.send({data});
});

const myOptions = (user) => {
	return {
		url: `${API_URL}/${user}`,
		method: 'GET',
		json: true,
		headers: {
			'User-Agent': 'request'
		}
	}
}

const gestAccount = request(myOptions(GEST), (error, response, body) => body);

module.exports = router;
