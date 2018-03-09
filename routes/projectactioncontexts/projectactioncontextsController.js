const db = require('../../database/db');
const resp = require('../helpers/send');

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
};
