const express = require( 'express' );
const projects = require( './projects-model' );
const router = express.Router();
const db = require('../data/db-config.js')


router.get('/', (req, res)=> {
    db('projects').then(proj =>{

        
    })
})
router.get('/', (req, res)=> {
    db('projects').then(proj =>{


    })
})
router.get('/', (req, res)=> {
    db('projects').then(proj =>{


    })
})

module.exports = router