const db = require('../configuration/db.js');
const statusCodes = require('../common/statusCodes.js');
module.exports = {
  get: function(id) {
    let query = db('Actions');
    if (id) {
      query.where('id', id);
    }
    return query.then();
  },
  post: action => {
    if (!action) return { error: new Error('action is required') };
    const {
      projectId,
      description,
      notes,
      contextIds,
      completed = false
    } = action;
    if (!projectId || !description || !notes)
      return {
        error: new Error('projectId, description, and notes are required')
      };
    return db('Actions')
      .insert({ projectId, description, notes, completed })
      .then(newActionIds => {
        if (contextIds) {
          const actionId = newActionIds[0];
          contextIds.forEach(contextId => {
            db('ActionsContexts')
              .insert({ actionId, contextId })
              .then()
              .catch(err => {
                return {
                  error: new Error(
                    'ActionsContexts insert failed:' + err.message
                  )
                };
              });
          });
        }
        return {
          id: newActionIds[0],
          projectId,
          description,
          notes,
          completed
        };
      })
      .catch(err => {
        return { error: new Error('insert error:' + err.message) };
      });
  },
  put: id => {
    if (!id) {
      return { error: new Error('id is required') };
    }
    return db('Actions')
      .update('completed', true)
      .where('id', id)
      .then(count => {
        return { completed: count };
      });
  }
};
