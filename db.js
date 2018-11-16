const knex=require('knex');
const knexConfig=require('./knexfile');
const db = knex(knexConfig.development);
module.exports={
    findByID
};
function findByID(id){
    return knex
        .select()
        .from('projects')
        .join('actions','projects.id','=','actions.project_id')
        .where('id',id)
}