const express = require('express');

const projects = require('./pModels.js');
const actions = require('./aModels.js');

const router = express.Router();

// create a new project *
router.post('/', (req, res) => {
    const project = req.body;
  
    projects
      .insert(project)
      .then(ids => {
        res.status(201).json(ids[0]);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  

// get a list of all projects *
router.get('/', (req, res) => {
    projects
    .find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});


router.get("/:id/actions", (req, res) => {
  actions
    .getProjectActions(req.params.id)
    .then(action => {
      if (action.length > 0) {
        res.json(action);
      } else
        res.status(404).json({message:'no actions found for this project'});
    })
    .catch(err =>
      res.status(500).json({message: 'actions cannot be populated at this time.'})
    );
});

// get a project by id *
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projects.findById(id);

    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'project not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


// // update cohorts  *
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   cohorts
//     .update(id, changes)
//     .then(count => {
//       if (!count || count < 1) {
//         res.status(404).json({ message: 'No records found to update' });
//       } else {
//         res.status(200).json(count);
//       }
//     })
//     .catch(err => res.status(500).json(err));
// });

// // delete cohorts *
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   cohorts
//     .remove(id)
//     .then(count => {
//       if (!count || count < 1) {
//         res.status(404).json({ message: 'No records found to delete' });
//       } else {
//         res.status(200).json(count);
//       }
//     })
//     .catch(err => res.status(500).json(err));
// });

module.exports = router;
