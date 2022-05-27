const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config()
const API_SERVER = process.env.API_SERVER;
const PORT = process.env.PORT;

const myAccountRouter = require("./routes/my_account");
const followingRouter = require("./routes/following");
const followersRouter = require("./routes/followers");
const repositoryRouter = require("./routes/repository");
const searchRouter = require("./routes/search");

app.use(cors())

app.get("/", (req, res) => {
	res.send("Hello from backend");
});

// My account api
app.use("/", myAccountRouter);

// Following users api
app.use("/", followingRouter);

// follower users api
app.use("/", followersRouter);

// repository api
app.use("/", repositoryRouter);

// searchRouter api
app.use("/", searchRouter);

app.listen(PORT, () => {
	console.log(`Backend server port ${PORT}... ${API_SERVER}:${PORT}`);
});
