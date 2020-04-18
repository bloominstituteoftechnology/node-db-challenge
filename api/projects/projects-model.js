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

const insert = () => {}

const update = () => {}

const remove = () => {}

module.exports = {
    get,
    insert,
    update,
    remove,
}