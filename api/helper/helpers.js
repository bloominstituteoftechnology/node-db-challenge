const knex = require('knex');

const knexConfig = require('../../knexfile.js');
const db = knex (knexConfig.development);

module.exports = {
    createProject:  function(body){
        return db.insert(body).into('projects')
    },
    getProjects: function(){
        return db('projects')
    },
    createAction:function(body){
        return db.insert(body).into('actions')
    },
    getActions: function(){
        return db('actions')
    },
    getProjectById: function(id){
        return db('projects').where({ id }).first()
        
    },
    getActionsWithProject: function(id){
        return db('actions').where({project_id: id})
    }
}