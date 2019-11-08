
const db = require('../data/db-config');

module.exports = {
find,
findById,
findSteps,
add,
remove,
update
}; 

function find() {
    return db.select('*').from('project');
};

function findById(id) {
    return db('project').where({id}).first();
    
};


function findSteps(id) {
    return db
   
    .select('steps.*')
    .from('steps')
    .join('schemes', 'schemes.id', '=', 'steps.scheme_id')
    .where('schemes.id', id)
    
};


 function add(scheme) {
   return db('project', 'id').insert(scheme)
     
};


function remove(id) {
    return db('project').where({id}).del();
};

function update(changes, id) {
    return db('project')
    .where('id', id)
    .update(changes, '*');
};