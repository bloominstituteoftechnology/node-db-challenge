const db = require('../dbConfig');

module.exports= {
find
};

function find(id) {
 if(id) {
     return db('actions')
     .where(id)
 }

    return db('actions');
}

