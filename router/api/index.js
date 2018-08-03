const express = require('express');
const server = express();
const db = require('../../data/helpers/projectDb');

server.route('/project')
    .get((req,res)=>{
        db.get()
        .then(result => res.status(200).json(result))
        .catch(error => console.log('error on getting db', error))
    })

server.route('/project/:id')
    .get((req,res)=>{
        console.log(req.params.id);
        db.getProjectActions(req.params.id)
        .then(result => res.status(200).json(result))
        .catch(error => console.log('error on getting db', error))
    })


module.exports = server;