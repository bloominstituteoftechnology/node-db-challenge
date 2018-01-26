const cfg = require('./knexfile');
const knex = require('knex')(cfg);
const express = require('express');
const app = express();

class CrudRouteGenerator {

  constructor(tableName) {
    this.tableName = tableName;
  }

  getRoute(req, res) {
    let query = knex.select('*').from(this.tableName);
    for (const [key, value] in Object.entries(req.body)) {
      query = query.where(key, value);
    }
    query.then(data => res.status(200).json(data))
    .catch(err => res.status(500).err({err: err.message}))
  }

  getByIdRoute(req, res) {
    knex.select('*').from(this.tableName).where('id', req.params.id).first()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
  }

  postRoute(req, res) {
    knex(this.tableName).insert(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
  }

  putByIdRoute(req, res) {
    knex(this.tableName).where('id', req.params.id).update(req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
  }

  deleteByIdRoute(req, res) {
    knex(this.tableName).delete().where('id', req.params.id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({err: err.message}))
  }

  exportRoutes() {
    const router = express.Router();
    const routes = 
    router
    .get('/', (req, res) => this.getRoute(req, res))
    .get('/:id', (req, res) => this.getByIdRoute(req, res))
    .post('/', (req, res) => this.postRoute(req, res))
    .put('/:id', (req, res) => this.putByIdRoute(req, res))
    .delete('/:id', (req, res) => this.deleteByIdRoute(req, res));
    return routes;
  }
}

module.exports = CrudRouteGenerator;