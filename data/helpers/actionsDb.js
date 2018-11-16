const db = require('../dbConfig.js');

module.exports = {
    getAction,
    getActions,
    addAction
};

// returns all actions
function getActions() {
    return db('actions');
};

// returns action by id
function getAction(id) {
    return db('actions as a')
        .join('projects as p', 'a.project', 'p.id')
        .select('a.id', 'a.description', 'a.notes', 'a.completed', 'a.project', 'p.name')
        .where('a.id', id);
}

// adds action if project id exists and returns new action id
function addAction(action) {
    return db('actions')
        .insert(action)
        .then(id => ({id: id[0]}));
};