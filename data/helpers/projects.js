const express = require("express");
const db = require("./projectsModel.js");
const _ = require("lodash")

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
    const project = await db.findById(id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: " Project not found" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

//[POST] POST for adding projects.
router.post("/", (req, res) => {
  const project = req.body;

  db.add(project)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// [GET] GET for retrieving a project by its id that returns project with actions
router.get('/:id/actions', (req, res) => {
    const { id } = req.params;
    const project = db.project(id)
    const action = db.actions(id)


    Promise.all([project, action])
        .then(values => {
            let [project, action] = values;
            project = project[0];
          res.status(200).json({...project, actions:action})
        })

})

module.exports = router;
