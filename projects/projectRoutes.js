const express = require('express');
const router = express.Router();
const dbConfig = require('../data/dbConfig');

router.use(express.json());

//BEGIN PROJECTS CRUD
router.get('/', async (req, res, next) => {
  try {
    const projects = await dbConfig('projects');
    res.status(200).json(projects);
  } catch (err) {
    next({
      code: 500,
      success: false,
      statusCode: 500,
      userMessage: err,
      compilerMessage: `${err}`
    })
  }

});

router.get('/:id', async (req, res, next) => {
  try {
    const project = await dbConfig('projects').where('id', req.params.id).first();
    const actions = await dbConfig('actions').where('project_id', req.params.id);
    project.actions = actions;
    res.status(200).json(project);
  } catch (err) {
    next({
      code: 500,
      success: false,
      statusCode: 500,
      userMessage: err,
      compilerMessage: `${err}`
    })
  }
});

router.post('/', async (req, res, next) => {
  const {
    name,
    description
  } = req.body;
  try {
    const ids = await dbConfig.insert({
      name,
      description
    }).into('projects');
    const id = ids[0];
    res.status(201).json(await dbConfig('projects').where('id', id));
  } catch (err) {
    next({
      code: 500,
      success: false,
      statusCode: 500,
      userMessage: err,
      compilerMessage: `${err}`
    })
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await dbConfig('projects').where('id', req.params.id).del();
    res.status(200).json(result);
  } catch (err) {
    next({
      code: 500,
      success: false,
      statusCode: 500,
      userMessage: err,
      compilerMessage: `${err}`
    })
  }
});

router.put('/:id', async (req, res, next) => {
  const {
    name,
    description
  } = req.body;
  try {
    const index = await dbConfig('projects').where('id', req.params.id).first().update({
      name,
      description
    });
    if (index > 0) {
      return res.status(200).json(await dbConfig('projects').where('id', req.params.id).first())
    };
    res.status(200).send("It didn't trigger");
  } catch (err) {
    next({
      code: 500,
      success: false,
      statusCode: 500,
      userMessage: err,
      compilerMessage: `${err}`
    })
  }
});
//END PROJECTS CRUD

//ERROR HANDLING MIDDLEWARE
router.use((err, req, res, next) => {
  //You could put some user notes here
  switch (err.code) {
    case 404:
      res.status(err.code).send({
        success: false,
        statusCode: err.code,
        description: err.userMessage
      });
      break;
    case 500:
      res.status(err.code).send({
        success: false,
        statusCode: err.code,
        description: err.userMessage,
        compilerMessage: err.compilerMessage
      })
    default:
      res.status(500).send({
        success: false,
        title: err.message,
        description: err.consoleLog
      });
      break;
  }
})

//EXPRESS ROUTER EXPORT
module.exports = router;
