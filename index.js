const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const projectsRoutes = require("./routes/projectsRoutes");
const actionsRoutes = require("./routes/actionsRoutes");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));

server.use("/api/projects", projectsRoutes);
server.use("/api/actions", actionsRoutes);

const port = 7000;
server.listen(port, function() {
	console.log(
		`\n===Yarrrrrn, yer server be sailin' on port 7000, yarrrrrn ===\n`,
	);
});
