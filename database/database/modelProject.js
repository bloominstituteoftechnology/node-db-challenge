const knex=require('knex');
const dbConfig=require('../knexfile.js');
const db= knex(dbConfig.development);

module.exports={
addProject:(function(project){
    return db('projects').insert(project).then(id=>id)
    }),
addAction:(function(action){
    return db('actions').insert(action).then(id=>id)
    }),
getProject:(function(projectId){
    return db('projects').where({ id: projectId }).then(project=>project)
        }),
getActions:(function(actionId){
    return db('actions').where({project_id:actionId}).then(actions=>actions)
        }),
}