const knex=require('knex');
const dbConfig=require('../knexfile.js');
const db= knex(dbConfig.development);

module.exports={
addProject:(function(project){
    return db('projects').insert(project).then(id=>id)
    }),
addActions:(function(action){
    return db('actions').insert(action).then(id=>id)
    }),
getProject:(function(projectId){
    return db('projects').where({ id: projectId }).then(project=>project)
        }),
getActions:(function(projectId){
    return db('actions').where({project_id:projectId}).then(actions=>actions)
        }),


}

