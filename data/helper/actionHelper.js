const db = require('../dbConfig');

module.exports= {
find,
findProjectActions,
insert,
update,
remove
};

function find(id) {
 if(id) {
     return db('actions')
     .where({id})
 }else return db('actions');
};

function findProjectActions(project_id) {
    return db('actions').where('project_id', project_id)
}

function insert(action) {
   return db('actions').insert(action);
}

function update(id, action) {
    return db('actions').where({id}).update(action);
}

function remove(id) {
    return db('actions').where({id}).del();
}