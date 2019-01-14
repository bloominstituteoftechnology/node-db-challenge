const express = require('express'),
    bodyParser = require('body-parser'),
    actions = require('./api/actions'),
    projects = require('./api/projects');

const app = express();

app
    .use(bodyParser.json())
    .use('/actions', actions)
    .use('/projects', projects);


app.listen(5000);