const express = require('express');
const projectsDB = require('../data/helpers/projectsDB');
const actionsDB = require('../data/helpers/actionsDB');
const { projectConstraints, actionConstraints } = require('../middleware');
const router = express.Router();

/* 
  PROJECTS API
*/

//get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await projectsDB.get();
    if (projects.length === 0) {
      res.status(200).json({ message: 'There are currently no projects' });
    } else {
      res.status(200).json(projects);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// get a project by id
router.get('/:id', async (req, res) => {
  const ID = req.params.id;

  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      res.status(200).json(project);
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// get a project's actions
router.get('/:id/actions', async (req, res) => {
  const ID = req.params.id;

  // works, but object return doesn't match specs
  // try {
  //   const projects = await projectsDB.getProjectsActions(ID);
  //   console.log('PROJECTS', projects);
  //   res.status(200).send(projects);
  // } catch (err) {
  //   res.status(500).send(`${err}`);
  // }

  try {
    let project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      try {
        const actions = await actionsDB.getPK(ID);
        if (typeof actions === 'undefined') {
          res
            .status(400)
            .json({ message: `There are no actions with p_id:${ID}` });
        } else {
          project = { ...project, actions };
          console.log('PROJECT', project);
          res.status(200).json(project);
        }
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// add a project
router.post('', projectConstraints, async (req, res) => {
  const NAME = req.body.name;
  const DESCRIPTION = req.body.description;

  const PROJECT = { name: NAME, description: DESCRIPTION, done: false };

  try {
    const response = await projectsDB.insert(PROJECT);
    if (response) {
      res
        .status(200)
        .json({ message: `Project with id:${response.id} has been added.` });
    } else {
      res.status(400).json({
        error: `Undetermined error adding project.`,
      });
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// add an action to a project
/* prettier-ignore */
router.post('/:id/actions', actionConstraints, async (req, res) => {
  const ID = req.params.id;
  const NOTES = req.body.notes;
  const DESCRIPTION = req.body.description;

  // actions belong to a project, p_id is FK to project
  const ACTION = {
    notes: NOTES,
    description: DESCRIPTION,
    done: false,
    p_id: ID,
  };

  // make sure we have the project to add the action to
  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      // have our project!  try and add the action
      try {
        const response = await actionsDB.insert(ACTION);
        if (response) {
          res.status(200).json({ message: `Action with id:${response.id} has been added.` });
        } else {
          res
            .status(400)
            .json({ error: `Undetermined error adding the action.` });
        }
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// update a project
router.put('/:id', projectConstraints, async (req, res) => {
  const ID = req.params.id;
  const NAME = req.body.name;
  const DESCRIPTION = req.body.description;

  const PROJECT = { name: NAME, description: DESCRIPTION };

  // make sure we have the project to update
  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      // we do! try to update the project
      try {
        const project = await projectsDB.update(ID, PROJECT);
        res.status(200).json({ message: `Project id:${ID} has been updated.` });
      } catch (err) {
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

// delete a project
router.delete('/:id', async (req, res) => {
  const ID = req.params.id;

  // make sure we have the project to delete
  try {
    const project = await projectsDB.get(ID);
    if (typeof project === 'undefined') {
      res.status(400).json({ message: `There is no project with id:${ID}` });
    } else {
      // we do! try to delete the project
      try {
        const project = await projectsDB.remove(ID);
        res.status(200).json({ message: `Project id:${ID} has been deleted.` });
      } catch (err) {
        if (err.errno === 19) {
          res.status(500).json({
            error: `Project id:${ID} can not be deleted because it has actions. Delete the actions first, if you really want to delete this project.`,
          });
          return;
        }
        res.status(500).send(`${err}`);
      }
    }
  } catch (err) {
    res.status(500).send(`${err}`);
  }
});

module.exports = router;
