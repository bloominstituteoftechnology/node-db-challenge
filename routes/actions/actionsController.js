const db = require('../../database/db.js');
const knex = require('knex');

const tbl = 'actions';

module.exports = {
  request: (req, res, next) => {
    const { id } = req.params;

    let q = db('actions as a');

    id ? q.where('a.id', id) : null;

    q
      .select(
        'a.id',
        'a.description',
        'a.notes',
        knex.raw(
          `(case when a.completed = 1 then 'true' else 'false' end) as completed`,
        ),
      )
      .then(actions => {
        req.actions = actions;
        next();
      })
      .catch(err =>
        res.status(500).json({ msg: 'Server error retrieving actions', err }),
      );
  },
};
