const db = require('../../data/dbConfig')

const get  = (id) => {
    let query = db('projects')
    if (id) {
        return query
            .where({ id })
            .first()
            .then( (project) => {
                if (project) {
                    return project;
                } else {
                    return null;
                }
            })
            .catch( (err) => {
                console.log(err);
            })
    } else {
        return query
            .then(projects  => {
                if (projects) {
                    return projects;
                } else {
                    return null;
                }
            })
            .catch( (err) => {
                console.log(err);
            })
            
    }
}

const insert = (body) => {
    let query = db('projects')
    if (body) {
        return query
            .insert(body)
            .then((insertedProject) => {
                return insertedProject
                    ? insertedProject
                    : null;
            })
            .catch( (err) => {
                console.log(err);
            })
    }
}

const update = (id, changes) => {
    let query = db('projects')
    if (id && changes) {
        return query
            .where({ id })
            .update(changes)
            .then( (updatedProject) => {
                if (updatedProject) {
                    return updatedProject
                } else {
                    return null;
                }
            }).catch( (err) => {
                console.log(err)
            })
    }
}

const remove = (id) => {
    let query = db('projects')
    if (id) {
        return query
            .where({ id })
            .del()
    }
}

module.exports = {
    get,
    insert,
    update,
    remove,
}