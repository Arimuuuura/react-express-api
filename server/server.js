const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

const myAccountRouter = require("./routes/my_account");
const followingRouter = require("./routes/following");
const followersRouter = require("./routes/followers");
const repositoryRouter = require("./routes/repository");

app.use(cors())

app.get("/", (req, res) => {
	res.send("Hello from backend");
});

// app.post("/hello/:user", (req, res) => {
// 	console.log(req.params);
// 	res.send("Hello");
// });

app.get("/api/hello", (req, res) => {
	const user = req.query.user;
	console.log(user);
	res.send(user);
});

// My account api
app.use("/", myAccountRouter);

// Following users api
app.use("/", followingRouter);

// follower users api
app.use("/", followersRouter);

// repository api
app.use("/", repositoryRouter);

app.listen(PORT, () => {
	console.log(`Backend server port ${PORT}... http://localhost:${PORT}`);
});
