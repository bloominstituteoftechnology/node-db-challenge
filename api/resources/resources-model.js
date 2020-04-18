const db = require('../../data/dbConfig');

const addResource = (resource) => {
    return db('resources').insert(resource, 'id');
}

const getResources = () => {
    return db('resources');
}

module.exports = {
    addResource,
    getResources
}
