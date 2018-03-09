const db = require('../../database/db');
const resp = require('../helpers/send');
// const knex = require('knex');
// const db = require('../../db/knex');

const tbl = 'projects';

module.exports = {
  request: (req, res) => {
    const { id } = req.params;

    let q = db(tbl);

    id ? q.where({ id }) : null;

    q
      .then(projects => resp(res, 200, { projects }))
      .catch(err => resp(res, 500, { msg: 'Error retrieving projects.', err }));

    // q
    //   .select(
    //     'p.id',
    //     'p.name',
    //     'p.description',
    //     knex.raw(
    //       `(case when p.completed = 1 then 'true' else 'false' end) as completed`,
    //     ),
    //   )
    //   .then(projects => {
    //     req.projects = projects;
    //     next();
    //   })
    //   .catch(err =>
    //     res.status(500).json({ msg: 'Server error retrieving projects', err }),
    //   );

    // q
    //   .join('projectactions as pa', 'p.id', 'pa.projectId')
    //   .join('actions as a', 'a.id', 'pa.actionId')
    //   .join('projectcontexts as pc', 'p.id', 'pc.projectId')
    //   .join('contexts as c', 'c.id', 'pc.contextId')
    //   .select(
    //     'p.id',
    //     'p.name',
    //     'p.description',
    //     knex.raw(
    //       `(case when p.completed = 1 then 'true' else 'false' end) as completed`,
    //     ),
    //     'a.id as actionId',
    //     'a.description as actionDescription',
    //     'a.notes as actionNotes',
    //     knex.raw(
    //       `(case when a.completed = 1 then 'true' else 'false' end) as actionCompleted`,
    //     ),
    //     'c.id as contextId',
    //     'c.context as contextContext',
    //   )
    //   .then(projects => {
    //     let allProjects = [];

    //     console.log(projects);

    //     projects.forEach(p => {
    //       if (!allProjects.includes(p.id)) allProjects.push(p.id);
    //     });

    //     allProjects = allProjects.map(e => ({ id: e }));

    //     allProjects = allProjects.map(e => projects.find(p => p.id === e.id));

    //     // res.json(projects);
    //     res.json(allProjects);
    //   })
    //   .catch(err => res.status(500).json(err));
  },
  create: (req, res) => {
    db
      .insert(req.body)
      .into(tbl)
      .then(id => resp(res, 201, { id }))
      .catch(err => resp(res, 500, { msg: 'Error creating project.', err }));
  },
  update: (req, res) => {
    const { id } = req.params;

    db(tbl)
      .where({ id })
      .update(req.body)
      .then(count => resp(res, 200, count))
      .catch(err => resp(res, 500, { msg: 'Error updating project.', err }));
  },
  del: (req, res) => {
    const { id } = req.params;

    db(tbl)
      .where({ id })
      .del()
      .then(count => resp(res, 200, count));
  },
};
