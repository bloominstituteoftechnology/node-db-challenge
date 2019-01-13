let actionsAll = '';
const ENV = 'development';
const express = require('express');
const knex = require('knex');
const dbCONFIG = require('./knexfile.js')

const server = express()
const db = knex(dbCONFIG[ENV])

const PORT = 4444;

server.get('/api/actions', (req, res) => {
    db('actions')
    .then(info => {
        res.json(info)})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })
})

server.get('/api/projects', (req, res) => {
    db('actions')
    .then(information => {
        actionsAll = information;})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })

    db('projects')
    .then(info => {
        info.map(item => {return item.actions = actionsAll.filter(action => {return action.project_id === item.id})})
        res.json(info)})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })
})

server.get('/api/projects/:id', (req,res) => {
    const {id} = req.params;

    db('actions')
    .then(information => {
        actionsAll = information;})
        .catch(err => {
            res.status(500).json({err: `${err} Something went wrong`})
        })

    db('projects').where('id',id)
    .then(info => {
        if (info.length === 1) {
            info.map(item => {return item.actions = actionsAll.filter(action => {return action.project_id === item.id})})
            res.json(info);
        }
        else {
            res.status(404).json({message: `Could not find project with that id`})
        }
    })
    .catch(err =>
    res.status(500).json({message: `Could not find project ${err}`}))
})

server.get('/api/actions/:id', (req,res) => {
    const {id} = req.params;

    db('actions').where('id',id)
    .then(info => {
        if (info.length === 1) {
            res.json(info);
        }
        else {
            res.status(404).json({message: `Could not find action with that id`})
        }
    })
    .catch(err =>
    res.status(500).json({message: `Could not find action ${err}`}))
})

server.listen(PORT, (err) => {
    if (err) {console.log(err);}
    else {console.log(`listening on port ${PORT}`)}
} )