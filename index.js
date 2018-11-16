const express = require('express')
const knex = require('knex')
// const knexConfig = require('./knexfile.js')
// const db = knex(knexConfig.development)
const server = express()
server.use(express.json())

// ===== SANITY CHECK =====
server.get('/', (req, res) => {
    res.send({ message: "API is running" })
})

// ===== SANITY CHECK =====



// ===== SANITY CHECK =====




const port = 8000
server.listen(port, () => console.log(`=== PORT: 8k ===`))