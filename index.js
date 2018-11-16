const express = require('express')
const middleware= require('./config/middleware')
const knex = require('knex')
const knexConfig= require('./knexfile')

const port = process.env.PORT || 3334
const server = express()
const db = knex(knexConfig.development)

middleware(server)
server.get('/' , (req,res)=>{
    res.send('<h1>built by Ryan Clausen</h1>')
})



server.listen(port, ()=> console.log(`we hear you ${port}`))