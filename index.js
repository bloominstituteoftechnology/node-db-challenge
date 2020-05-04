
// const express = require("express")
// const helmet = require("helmet")
// server.use(helmet())
// server.use("/schemes", schemeRouter)
// const schemeRouter = require("./schemes/scheme-router")
// const server = express()
// server.use(express.json())

const server = require('./server.js');
const welcomeRouter = require("./welcome/welcome-router")

server.use("/", welcomeRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});