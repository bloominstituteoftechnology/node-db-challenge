const express = require("express");

const Resources = require("./data/dbConfig.js");

const router = express.Router();

module.exports = router;

router.post("/", async (req, res) => {
    const newResource = req.body;

    if (newResource.name && newResource.desciption) {
        try {
            const resources = await Resources.insert(req.body);
            res.status(201).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message:
                    "There was an error while saving the resource to the database"
            });
        }
    } else {
        res.status(400).json({
            err: "Please provide name and description for the resources."
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const resources = await Resources.find(req.query);
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "The resources information could not be retrieved."
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const resources = await Resources.findById(req.params.id);

        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: "The resource with the specified ID does not exist"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The resource information could not be retrieved"
        });
    }
});
