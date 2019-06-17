const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    addProject,
    getProjectById,
    updateProject,
    deleteProject
};

function getProjects() {
  //  return db('projects');   // the whole table
 
   return db
        .select('projects.name')
        .from('projects')
        .orderBy('projects.name');   // ordering is affected by upper/lowercase !!!!

}

function addProject(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({id: ids[0]}));
}

async function getProjectById(id) {
    const projects =  await db.select()
        .from('projects as p')
        .where('p.id', Number(id));
    const actions = await db.select('a.id', 'a.description', 'a.notes', 'a.completed')
        .from('projects as p')
        .join('actions as a', 'p.id', 'a.project_id')
        .where('p.id', Number(id));
    if(projects) {
        const result = {...projects[0], actions: actions};
        return result;
    } else {
        return projects[0];
    }
}

async function updateProject(id, projectChanges) {
    return db('projects')
        .where({id})
        .update(projectChanges);
}

async function deleteProject(id) {
    return db('projects')
        .where({id})
        .del();

}