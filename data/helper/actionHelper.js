const db = require('../dbConfig');

module.exports= {
find,
insert
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
