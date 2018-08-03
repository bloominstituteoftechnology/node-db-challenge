const express = require('express');
const server = express();
// const db = require('../db');
const projects = require('../helpers/projectHelpers');


const router = express.Router();

const errorHandler = (status, message, res) => {
    res.status(status).json({ error: message });
    return;
};

//Project Endpoints

//List of projects
router.get('/', (req, res) => {
    projects.getProjects()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(error => {
        errorHandler(500, "The project information could not be retrieved.", res);
    });
});

// router.get('/', (req, res) => {
//     projects
//     .get()
//     .then(response => {
//         res.status(200).json(response);
//     })
//     .catch(error => {
//         errorHandler(500, "The project information could not be retrieved.", res);
//     });
// });

//Get by ID

router.get('/:id', (req, res) => {
    const id = req.params;
    if(!id) {
        res.status(404);
        res.json({ error: "That project ID does not exist" })
        } else {
    projects
    .getById(id)
    .then(project => {
        res.json({ project })
    })
    .catch(error=> {
        errorHandler(500, "The project information could not be retrieved.", res);
    });
}
});

//Insert Project

router.post('/', (req, res) => {
    const { name, description } = req.body;
    projects
    .insert({ name, description })
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
      res.status(500).json({error: 'The project could not be created'})
    });
  });

//Update Project

router.put('/:id', (req, res) => {
    const id = req.params;
    const project = req.body;

    projects
    .update(id, project)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error=> {
        errorHandler(500, "The project information could not be updated.", res);
    });
});

//Delete Project

router.delete('/:id', (req, res) => {
    const id = req.params;
    if(!id) {
        res.status(404)
        res.json({ error: "The project with the specified ID does not exist." })
        }
    projects
    .remove(id)
    .then(response => {
        res.status(200).json(response)
                })
    .catch(error => {
        errorHandler(500, "The project information could not be removed.", res);
    });
});

//Project ID returns Actions

router.get('/:id/actions', (req, res) => {
    const id = req.params;
    projects
    .getProjectActions(id)
    .then(actions => {
        res.json({ actions })
    })
    .catch(error => {
        errorHandler(500, "Something isn't right", res);
    });
});

module.exports = router;