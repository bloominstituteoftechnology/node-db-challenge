const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    findAtns,
    addAtns,
}

function findAtns() {
    return db('atns')
        .join('pjts', 'atns.pjts_id', '=', 'pjts.id');
}

function addAtns(atns) {
    return db('atns')
        .insert(atns)
        .into('atns');
}