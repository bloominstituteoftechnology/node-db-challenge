const express = require('express')
const helmet = require('helmet');
const cors = require('cors');
const projectRoute = require('./projects/projects-route');
const taskRoute = require('./tasks/tasks-route');
const resourcesRoute = require('./resources/resources-route');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/resources", resourcesRoute);

app.get('/api/status', (req, res) => {
    res.json({api: "up"})
})

module.exports = app;