const db = require('../dbConfig');

module.exports= {
find,
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

function insert(action) {
   return db('actions').insert(action);
}

function update(id, action) {
    return db('actions').where({id}).update(action);
}

function remove(id) {
    return db('actions').where({id}).del();
}