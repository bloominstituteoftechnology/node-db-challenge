const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    findPjts,
    findPjtsById,
    addPjts,
}

function findPjts() {
    return db('pjts');
}

function findPjtsById(id) {
    return db('pjts')
        .where({ "pjts.id":id })
        .join('atns', 'pjts.id', '=', 'atns.pjts_id');
}

function addPjts(pjts) {
    return db('pjts')
        .insert(pjts)
        .into('pjts')
}