  
const db = require('../data/db-config');

module.exports ={
    getResource,
    getById,
    insert
}

//RETURN!!!!!!

function getResource() {
    return db('resource')
};

function getById(id) {
    return db('resource')
        .where({"resource.id": id})
        .first()
};

function insert(resource){
    return db('resource')
        .insert(resource, 'id')
        .then(([id]) => getById(id))
};