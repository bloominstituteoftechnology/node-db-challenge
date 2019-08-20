const express = require("express");

const Resources = require("./data/resourcesModel.js");

const router = express.Router();

module.exports = router;

router.post("/", async (req, res) => {
    const newResource = req.body;

    if (newResource.name) {
        try {
            const resource = await Resources.insert(req.body);
            res.status(201).json(resource);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message:
                    "There was an error while saving the resource to the database"
            });
        }
    } else {
        res.status(400).json({
            err: "Please provide name  for the resources."
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const resources = await Resources.get(req.query);
        res.status(200).json(resources);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "The resources information could not be retrieved."
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const resources = await Resources.getById(req.params.id);

        if (resource) {
            res.status(200).json(resource);
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
