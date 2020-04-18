const tasksRoute = require('express').Router();

tasksRoute.get('/status', (req, res) =>{
    res.json({ tasksRoute: "up" });
})

module.exports = tasksRoute;