const knex = require('knex');
const knexConfig = require('../../knexfile');

//connection to the data base
const db = knex(knexConfig.development);

module.exports = {
 
    findProjectById,
    addProject

}

// function findProjectById(id) {
//     return db('projects')
//     .join('actions', 'projects.id', 'actions.projectId')
//     .select('projects.id', 'projects.name', 'actions.description')
//     .where({"projects.id": id}).first();
    
// }

function findProjectById(id) {

    let project = db('projects').where({id});
    let actions = db('actions').where({projectId: id})

    return Promise.all([project, actions]).then(results => {
      const [project, actions] = results;
      return {...project, actions: [...actions]};
    })
}


function addProject(project){
    return db('projects')
    .insert(project)
    .into('projects');
}