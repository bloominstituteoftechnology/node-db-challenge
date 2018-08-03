const express = require('express');
const router = express.Router();
const dbConfig = require('../data/dbConfig');

router.use(express.json());

//BEGIN PROJECTS CRUD
router.get('/', async (req, res, next) => {
  try {
    const contexts = await dbConfig('contexts');
    res.status(200).json(contexts);
  } catch (err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }

});

router.get('/:id', async (req, res, next) => {
  try {
    const context = await dbConfig('context').where('id', req.params.id).first();
    res.status(200).json(context);
  } catch (err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

router.post('/', async (req, res, next) => {
  const {action_id, name} = req.body;
  try {
    const ids = await dbConfig.insert({action_id, name}).into('contexts');
    const id = ids[0];
    res.status(201).json(await dbConfig('contexts').where('id', id));
  } catch(err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const result = await dbConfig('contexts').where('id', req.params.id).del();
    res.status(200).json(result);
  } catch(err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});

router.put('/:id', async (req, res, next) => {
  const {action_id, name} = req.body;
  try {
    const index = await dbConfig('contexts').where('id', req.params.id).first().update({action_id, name});
    if (index > 0) return res.status(200).json(await dbConfig('contexts').where('id', req.params.id).first());
    res.status(200).send("It didn't trigger");
  } catch(err) {
    next({code:500, success:false, statusCode:500, userMessage: err, compilerMessage:`${err}`})
  }
});
//END PROJECTS CRUD

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
