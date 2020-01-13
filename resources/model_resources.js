const db = require('../data/dbConfig.js');


module.exports = {
    findResources,
    addResources
};

function findResources() {
    return db('resources');
};

function addResources(resource) {
    return db('resources')
        .insert(resource)
        .then(r_ids => {
            return db('resources')
                .where({ id: r_ids[0] })
                .first()
        })
        .catch(err => {
            console.log(err);
        });
};