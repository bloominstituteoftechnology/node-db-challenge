const express = require('express');
const dbConfig = require('../data/dbConfig.js');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res, next) => {
  try {
    const actions = await dbConfig('actions');
    res.status(200).json(actions);
  } catch (err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const action = await dbConfig('actions').where('id', req.params.id).first();
    const contexts = await dbConfig('contexts').where('action_id', req.params.id);
    action.contexts = contexts;
    res.status(200).json(action);
  } catch (err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

router.post('/', async (req, res, next) => {
  const {project_id, description, notes} = req.body;
  try {
    const ids = await dbConfig.insert({project_id, description, notes}).into('actions');
    const id = ids[0];
    res.status(201).json(await dbConfig('actions').where('id', id));
  } catch(err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await dbConfig('actions').where('id', req.params.id).del();
    res.status(200).json(result);
  } catch(err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

router.put('/:id', async (req, res, next) => {
  const {project_id, description, notes} = req.body;
  try {
    const index = await dbConfig('actions').where('id', req.params.id).first().update({project_id, description, notes});
    if (index > 0) return res.status(200).json(await dbConfig('actions').where('id', req.params.id).first());
    res.status(200).send("It didn't trigger");
  } catch(err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

//ERROR HANDLING MIDDLEWARE
router.use((err, req, res, next) => {
  //You could put some user notes here
  switch(err.code) {
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

module.exports = router;
