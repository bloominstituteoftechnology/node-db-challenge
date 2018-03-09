const express = require('express');
const db = require('./contextController.js');
const contextRouter = express.Router();

contextRouter.get('/', (req, res) => {
  db
    .getContexts()
    .then(contexts => {
      if (contexts.length > 0) res.status(200).json(contexts);
      else res.status(200).json({ message: 'There are no contexts in the database.' });
    })
    .catch(error => {
      res.status(500).json({ error: 'Error retrieving the contexts.' });
    });
});

contextRouter.get('/:id', (req, res) => {
  const { id } = req.params;

  db
    .getContextById(id)
    .then(contexts => {
      if (contexts.length > 0) res.status(200).json(contexts);
      else res.status(200).json({ message: `There is no context with ID ${id}.` });
    })
    .catch(error => {
      res.status(500).json({ error: `Error retrieving the context with ID ${id}` });
    });
});

contextRouter.post('/', (req, res) => {
  const context = req.body;

  if (context.context.length > 0) {
    db
      .postContext(context)
      .then(ids => {
        res.status(201).json(ids);
      })
      .catch(error => {
        res.status(500).json({ error: 'Error saving the context.' });
      });
  } else {
    res.status(500).json({ error: 'You must provide a context.' });
  };
});

contextRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const context = req.body;

  if (context.context.length > 0) {
    db
      .putContextById(id, context)
      .then(count => {
        if (count > 0) {
          res.status(201).json({ message: `Context with ID ${id} updated successfully.` });
        } else {
          res.status(200).json({ message: `Context with ID ${id} not found.` });
        };
      })
      .catch(error => {
        res.status(404).json({ error: `Context with ID ${id} does not exist.` });
      });
  } else {
    res.status(500).json({ error: 'You must provide a context.' });
  }
});

contextRouter.delete('/:id', (req, res) => {
  const { id } = req.params;

  db
    .deleteContextById(id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({ message: `Context ${id} deleted successfully.`});
      } else {
        res.status(200).json({ message: `Context with ID ${id} not found.` });
      };
    })
    .catch(error => {
      res.status(404).json({ error: `The context with ID ${id} could not be deleted.` });
    });
});

module.exports = contextRouter;