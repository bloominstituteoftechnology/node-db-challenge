const express = require('express');

const Actions = require('./actions-model');
const Projects = require('./projects-model');



const actionsRouter = express.Router();

actionsRouter.use(express.json());

actionsRouter.get('/', async (req, res) => {
    try {
        const actions = await Actions.get();
        res.status(200).json(actions);
    } catch (error) {
        res.status(500).json({ error: `${error}` });

    }
});

actionsRouter.get('/:id', async (req, res) => {
    try {
        const actionId = await Actions.get(req.params.id);
        if (actionId) {
            res.status(200).json(actionId);
        } else {
            res.status(404).json({ message: 'Not found' });
        };
    } catch (error) {
        res.status(500).json({ error: `${error}` });
    };
});

actionsRouter.post('/', async (req, res) => {
    let { project_id, notes, description } = req.body;
  
     try {
      if (project_id && description && notes) {
        const newAction = Actions.insert(req.body);
        res.status(201).json(newAction);
      } else {
        res.status(500).json({error: 'Could not add action.'});
      }
    } catch (error) {
      res.status(500).json({error: `${error}`});
    }
});

actionsRouter.put('/:id', async (req, res) => {
    let { id } = req.params;
    let { project_id, notes, description } = req.body;
  
     try {
      const action = await Actions.get(id);
  
       if (action) {
        if (project_id && description && notes) {
          await Actions.update(id, req.body);
          res.status(200).json(action);
        } else {
          res.status(400).json({message: 'Could not update the action'})
        }
      } else {
        res.status(400).json({message: 'Could not find the action'});
      }
  
     } catch (err) {
      res.status(500).json({error: `${error}`});
    }
  });
  
actionsRouter.delete('/:id', async (req, res) => {

     try {
      const action = await Actions.get(req.params.id);
  
       if (action) {
        await Actions.remove(req.params.id);
        res.status(200).json(action);
      } else {
        res.status(400).json({message: 'Could not find action'});
      }
  
     } catch (error) {
      res.status(500).json({error: `${error}`});
    }
  });
  
module.exports = actionsRouter;