const express = require("express"),
    Projects = require("./project-model"),
    router = express.Router();

router.get("/", (req, res) => {
    Projects.getProjects()
        .then(project => res.status(200).json(project))
        .catch(err => {
            console.log(err)
            res.status(500).json({message: `Unable to contact server`})
        })
})



module.exports = router;