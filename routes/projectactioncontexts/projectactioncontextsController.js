const db = require('../../database/db');
const resp = require('../helpers/send');
const knex = require('knex');

const tbl = 'projectactioncontexts';

module.exports = {
  request: (req, res) => {
    const { id } = req.params;

    let q = db(tbl);

    id ? q.where({ id }) : null;

    q
      .then(projectactioncontexts => resp(res, 200, { projectactioncontexts }))
      .catch(err =>
        resp(res, 500, { msg: 'Error retrieving projectactioncontexts', err }),
      );
  },
  create: (req, res) => {
    db
      .insert(req.body)
      .into(tbl)
      .then(id => resp(res, 201, { id }))
      .catch(err =>
        resp(res, 500, { msg: 'Error creating projectactioncontext', err }),
      );
  },
  update: (req, res) => {
    const { id } = req.params;

    db(tbl)
      .where({ id })
      .update(req.body)
      .then(count => resp(res, 200, count))
      .catch(err =>
        resp(res, 500, { msg: 'Error updating projectactioncontext', err }),
      );
  },
  del: (req, res) => {
    const { id } = req.params;

    db(tbl)
      .where({ id })
      .del()
      .then(count => resp(res, 200, count))
      .catch(err =>
        resp(res, 500, { msg: 'Error deleting projectactioncontext', err }),
      );
  },
  requestProjectWith: id => {
    return db('projects as p')
      .where({ id })
      .first();
  },
  requestProjectWithContext: id => {
    let q = db(tbl);

    q
      .join('contexts as c', 'c.id', `${tbl}.contextId`)
      .where(`${tbl}.projectId`, id)
      .select('c.id', 'c.context');

    return q;
  },
  requestActionsWithContext: id => {
    let q = db(tbl);

    q
      .join('actions as a', 'a.id', `${tbl}.actionId`)
      .where('a.projectId', id)
      .select('a.id', 'a.description', 'a.notes', 'a.completed');

    return q;
  },
};
