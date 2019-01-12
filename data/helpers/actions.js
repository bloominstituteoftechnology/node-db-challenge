const express = require("express");
const db = require("./actionsModel.js");

const router = express.Router();

router.get("/", (req, res) => {
    db.find()
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const action = await db.findById(id);

        if (action) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: " Action  is not found" });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

//[POST] POST for adding projects.
router.post("/", (req, res) => {
    const action = req.body;

    db.add(action)
        .then(ids => {
            res.status(201).json(ids);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
