/**Contains and provides access to the helper functions that query the database via knex */

//Access knex/database connection
const db = require('../dbConfig');


//Create/export helper functions
module.exports = {
    //get all projects
    getProjects: function(){
        return db('projects')

    },

    //add project
    addProject: function(newProject){
        return db('projects')
        .insert(newProject)
        .then(ids =>{
            return {id: ids[0]}
        })
    },

    //get all actions
    getActions: function(){
        return db('actions')
    },

    addAction: function(newAction){
        return db('actions')
        .insert(newAction)
        .then(ids =>{
            return {id: ids[0]}
        })
    }


}
