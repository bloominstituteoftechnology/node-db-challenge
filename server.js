const express = require("express");
const bodyParser = require("body-parser");
const projectRouter = require("./projects/projectRoutes");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("working...");
});

app.use("/projects", projectRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port: ${port}`));
