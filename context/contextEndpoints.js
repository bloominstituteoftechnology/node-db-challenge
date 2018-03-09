const express = require('express');

const contexts = require('./contextController');

const ctxtRouter = express.Router();

ctxtRouter.post('/', function(req, res) {
  const ctxt = req.body;

  ctxts
    .insert(ctxt)
    .then(function(id) {
      res.status(201).json(id);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

ctxtRouter.get('/', function(req, res) {
  ctxts
    .get()
    .then(function(ctxts) {
      res.status(200).json(ctxts);
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

ctxtRouter.get('/:id', function(req, res) {
  const { id } = req.params;

  ctxts
    .get(id)
    .then(function(ctxt) {
      if (ctxt) {
        res.status(200).json(ctxt);
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

ctxtRouter.put('/:id', function(req, res) {
  const { id } = req.params;

  ctxts
    .update(id, req.body)
    .then(function(count) {
      if (count > 0) {
        res.status(200).json({ updated: count });
      } else {
        res.status(404).json(null);
      }
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

ctxtRouter.delete('/:id', function(req, res) {
  const { id } = req.params;

  ctxts
    .remove(id)
    .then(function(count) {
      res.status(200).json({ count });
    })
    .catch(function(error) {
      res.status(500).json({ error });
    });
});

module.exports = ctxtRouter;
