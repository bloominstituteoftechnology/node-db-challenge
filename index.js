// define dependancies
const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);
const PORT = 5000;

// use json
server.use(express.json());
server.listen(PORT, function() {
    console.log("Listening on port 5000...");
});

// GET main route
server.get('/api', (req,res) => {
    res.send("Server up and running");
});

// GET product by ID
server.get('api/product/:id',(req,res) => {
    const { id } = req.params;

    db("product")
        .where({id : id})
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => 
            res.status(500).json({err : "Find product by ID failed"});
});





