const router = require("express").Router();

const Projects = require("./projects-model");
const Actions = require("./actions-model");
const db = require("../data/dbConfig");

router.get("/projects/", (req, res) => {
  Projects.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: " we ran into error retrieving the project" });
    });
});

router.get("/projects/:id/", (req, res) => {
    Projects.findById(req.params.id)
    .then(projects => {
        Actions.find()
          .where({ project_id: req.params.id})
          .then(actions => {
            projects.actions = actions;
            return res.status(200).json(projects);
          });
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: " we ran into error retrieving the project" });
      });
  });

//   router.post("/projects/", (req, res) => {
//     Projects.add(project)
//       .then(inserted => {
//         res.status(200).json(inserted);
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ message: " we ran into error retrieving the project" });
//       });
//   });

  router.post('/projects/', async (req, res) => {
    const project = req.body;
    if (project.name) {
      try {
        const inserted = await Projects.add(project);
        res.status(201).json(inserted);
      } catch (error) {
        res
          .status(500)
          .json({ message: 'We ran into an error creating the project' });
      }
    } else {
      res.status(400).json({ message: 'Please provide name of the dish' });
    }
  });




module.exports = router;
