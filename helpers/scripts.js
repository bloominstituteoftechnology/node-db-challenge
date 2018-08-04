const db = require('../data/db');

module.exports = {
  getOne: (dbName, id) => {
    return new Promise((resolve, reject) => {
      db('projects')
        .where({ id })
        .then(count => {
          if (count[0]) {
            // item found, return it in promise
            console.log(count[0]);
            return resolve(count[0]);
          } else {
            //item not found but no error, return false in promise
            return resolve(false);
            // res.status(404).json({ message: 'The project was not found' });
          }
        })
        .catch(err => reject(err));
    });
  },

  getAll: dbName => {
    return new Promise((resolve, reject) => {
      db(dbName)
        .then(items => {
          resolve(items);
        })
        .catch(err => reject(err));
    });
  },

  isNumber: strToCheck => {
    return Number.isInteger(Number.parseInt(strToCheck));
  },
  checkExists: (dbName, nameOrId) => {
    return new Promise((resolve, reject) => {
      const item = {};
      if (module.exports.isNumber(nameOrId)) item.id = nameOrId;
      else {
        if (dbName === 'actions') item.description = nameOrId;
        else item.name = nameOrId;
      }

      //look for item
      db(dbName)
        .where(item)
        .then(count => {
          let retItem = {};
          if (!count[0]) {
            //item does not exist
            console.log('item not found');
            retItem = false;
          } else {
            console.log({ itemFound: { ...count[0] } });
            retItem = { ...count[0] }; // { id: 1, name: 'Burger' }
          }
          resolve(retItem);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },

  dbInsert: (dbName, item) => {
    return new Promise((resolve, reject) => {
      db.insert(item)
        .into(dbName)
        .then(ids => {
          const id = ids[0];
          console.log({ itemCreated: { id, ...item } });
          resolve({ id, ...item });
        })
        .catch(err => {
          console.log(err);
          console.log(item);
          reject(err);
        });
    });
  },

  getProjects: () => {
    return module.exports.getAll('projects');
  },

  addProject: project => {
    //check to make sure actions exist or can be created.
    // if an action is just an id and doesn't exist, error out
    return new Promise((resolve, reject) => {
      if (project.actions) {
        console.log(project);
        actionsArr = project.actions.split(' ');
        return module.exports
          .getActions(actionsArr)
          .then(expandedActions => {
            console.log({ expandedActions: expandedActions });
            project.actions = JSON.stringify(expandedActions);
          })
          .then(
            module.exports.dbInsert('projects', project).then(newProject => {
              console.log(newProject.id);
              resolve(newProject.id);
            })
          );
      } else {
        //now create project
        return module.exports.dbInsert('projects', project).then(newProject => {
          resolve(newProject.id);
        });
      }
    }).catch(err => reject(err));
  },

  getProject: idObj => {
    return module.exports.getOne('projects', idObj).then(project => {
      if (project) {
        if (project.actions) {
          const actions = JSON.parse(project.actions);
          console.log(actions);
          const expandedActions = module.exports.getActions(actions);
          console.log(expandedActions);
          project.actions = expandedActions;
          return project;
        } else return project;
      }
    });
  },

  getActions: idArray => {
    // return an array of all the expanded actions
    return new Promise((resolve, reject) => {
      const expandedActions = [];
      for (let i = 0; i < actionsArr.length; i++) {
        const action = actionsArr[i];
        module.exports
          .checkExists('actions', action)
          .then(newAction => {
            if (newAction) {
              //action exists, return just its id
              console.log(newAction.id);
              expandedActions.push(newAction.id);
              if (i === actionsArr.length - 1) resolve(expandedActions);
            } else if (!module.exports.isNumber(action)) {
              //action doesn't exist but it is a name, create it
              console.log({ creatingAction: action });
              return module.exports
                .dbInsert('actions', { description: action })
                .then(insertedAction => {
                  expandedActions.push(insertedAction.id);
                  if (i === actionsArr.length - 1) resolve(expandedActions);
                });
            } else {
              //action doesn't exist and is an id, dont add to project
              console.log({ actionNotFound: action });
              if (i === actionsArr.length - 1) resolve(expandedActions);
            }
          })
          .catch(err => {
            console.log(err);
          });
      } // end for loop
    }).catch(err => reject(err));
  }
};
