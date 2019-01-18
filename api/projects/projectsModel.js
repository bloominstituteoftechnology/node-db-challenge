const knex = require('knex');
const knexConfig = require('../../knexfile');

//connection to the data base
const db = knex(knexConfig.development);

module.exports = {
 
    findProjectById,
    addProject

}

function findProjectById(id) {
    return db('projects')
    .select('*')
    .from('projects')
    .where({id}).first()
    .rightJoin('actions', 'projects.id', 'actions.project_id');
    
}

function addProject(project){
    return db('projects')
    .insert(project)
    .into('projects');
}