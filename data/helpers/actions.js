
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
            res.status(200).json(action);
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


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    db.update(id, changes)
        .then(count => {
            if (!count || count < 1) {
            res.status(404).json({message:'No Action found to update.'})
            }
            else {
                res.status(200).json(count)
            }
        })
        .catch(err => {
        res.status(500).json(err)
    })

})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    db.remove(id).
        then(count => {
            if (!count || count < 1) {
                res.status(400).json({message: "No actions found to delete"})
            }
            else {
                res.status(200).json(count)
            }
        })
        .catch(err => {
        res.status(500).json(err)
    })
})
module.exports = router;
