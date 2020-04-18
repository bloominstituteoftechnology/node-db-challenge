const resourcesRoute = require('express').Router();

resourcesRoute.get('/status', (req, res) =>{
    res.json({ resourcesRoute: "up" });
})

module.exports = resourcesRoute
