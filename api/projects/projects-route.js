const projectRoute = require('express').Router();

projectRoute.get('/status', (req, res) =>{
    res.json({ projectRoute: "up" });
})

module.exports = projectRoute