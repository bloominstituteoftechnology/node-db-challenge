const express = require('express')
const db = require('../data/db-config')
const Projects = require ('./projects-model')
const router = express.Router()

module.exports = router