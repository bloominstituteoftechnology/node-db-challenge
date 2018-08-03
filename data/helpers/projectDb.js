const db = require('../db');

module.exports = {
    get: id => {
        let query = db('project');

        if (id) {
            query.where('id', id).first();

            const promises = [query, db('action as a').select('a.id', 'a.description', 'a.notes', 'a.completed').where('a.project_id', id)]

            return Promise.all(promises).then(results => {
                let [project, actions] = results;
                if (actions.length > 0) {
                    project.actions = actions;
                    let result = { ...project, completed: project.completed === 1 ? true : false };
                    result.actions = result.actions.map(action => ({ ...action, completed: action.completed === 1 ? true : false }))
                    return result;
                }
                return { ...project, completed: project.completed === 1 ? true : false };
            })
        }
        return query.then(projects => {
            return projects.map(project => ({ ...project, completed: project.completed === 1 ? true : false }))
        });
    },
    insert: project => {
        return db('project').insert(project).then(ids => ({ id: ids[0] }));
    },
    update: (id, project) => {
        return db('project').where('id', id).update(project);
    },
    remove: id => {
        return db('project').where('id', id).del();
    }
}