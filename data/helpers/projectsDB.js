const knex = require('knex')
const config = require('../../knexfile')
const projectsDB = knex(config.development)

module.exports ={
    pull: () => {
        return projectsDB('projects')
    },

    pullByID: (id) => {
        return projectsDB('projects')
        .leftJoin('actions', 'projects_id', '=', actions.project_id)
    },

    place: (project) => {
        return projectDB('projects')
               .insert(project)
               .then(ids => ({id: ids[0]}))
    },

    alter: (id, project) => {
        return projectsDB('projects')
               .where({id: id})
               .update(project)
    },

    clear: (id) => {
        return projectsDB('projects')
               .where({id: id})
               .truncate()
    }
}