const db = require("../dbConfig.js");

const mappers = require('./mappers');

module.exports ={
    get,
    insert,
    update,
    remove
};

function get(id) {
    let query = db('actions');
    if(id) {
        return query
        .where({id})
        .first()
        .then(action => mappers.actionToBody(action));
    }
}

return query.then(actions => {
    return actions.map(action => mappers.actionToBody(action));
});

function update(id, changes) {
    return db('actions')
    .where({id})
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
    return db ('actions')
    .where({ id })
    del();
}