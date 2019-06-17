const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getActions,
    addAction,
    getAction,
    updateAction,
    deleteAction
};

function getActions() {
    return db('actions');
}


function addAction(action) {
    return db('actions')
      .insert(action)
      .then(ids => ({id: ids[0]}));
}


async function getAction(id) {
    const actions =  await db.select('*')
        .from('actions as a')
        .where('a.id', Number(id));
    
    if(actions) {
        const result = {...actions[0]};
        return result;
    } else {
        return actions[0];
    }
}

async function updateAction(id, actionChanges) {
    return db('projects')
        .where({id})
        .update(actionChanges);
}

async function deleteAction(id) {
    return db('projects')
        .where({id})
        .del();

}