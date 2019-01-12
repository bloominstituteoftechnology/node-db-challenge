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

    //get project by id
    getProject: function(id){
        return db('actions')
        .join('projects', {'actions.project_id': 'projects.id'})
        .where('projects.id', id)
        .select('projects.id as id', 'projects.project_name as name',
                'projects.proj_description as description',
                'projects.proj_completed as completed',
                'actions.id as action_id',
                'actions.action_description',
                'actions.action_notes',
                'actions.action_completed')
 
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
