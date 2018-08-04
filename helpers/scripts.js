const db = require('../data/db');

module.exports = {
  getOne: (dbName, id) => {
    return new Promise((resolve, reject) => {
      db(dbName)
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
            console.log({ project: project });
            return project;
          })
          .then(project => {
            module.exports.dbInsert('projects', project).then(newProject => {
              console.log(newProject.id);
              resolve(newProject.id);
            });
          });
      } else {
        //now create project
        return module.exports.dbInsert('projects', project).then(newProject => {
          resolve(newProject.id);
        });
      }
    }).catch(err => reject(err));
  },

  getProject: idObj => {
    return new Promise((resolve, reject) => {
      console.log(idObj);
      module.exports
        .getOne('projects', idObj)
        .then(project => {
          if (project) {
            if (project.actions) {
              module.exports.expandActions(project.actions).then(actionsArr => {
                console.log('expandedActions:');
                console.log(actionsArr);
                let newProject = Object.assign({}, project);
                newProject.actions = actionsArr;
                console.log(newProject);
                return resolve(newProject);
              });
            } else resolve(project);
          }
        })
        .catch(err => reject(err));
    });
  },

  getActions: idArray => {
    // return an array of all the expanded actions
    return new Promise((resolve, reject) => {
      const expandedActions = [];
      for (let i = 0; i < idArray.length; i++) {
        const action = idArray[i];
        module.exports
          .checkExists('actions', action)
          .then(newAction => {
            if (newAction) {
              //action exists, return just its id
              console.log(newAction.id);
              expandedActions.push(newAction.id);
              if (i === idArray.length - 1) resolve(expandedActions);
            } else if (!module.exports.isNumber(action)) {
              //action doesn't exist but it is a name, create it
              console.log({ creatingAction: action });
              module.exports
                .dbInsert('actions', { description: action })
                .then(insertedAction => {
                  console.log(insertedAction);
                  expandedActions.push(insertedAction.id);
                  if (i === idArray.length - 1) resolve(expandedActions);
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
    });
  },
  expandActions: idStrings => {
    return new Promise((resolve, reject) => {
      const expandedActions = [];
      const idArr = JSON.parse(idStrings);
      for (let i = 0; i < idArr.length; i++) {
        const action = idArr[i];
        console.log({ actionI: action });
        module.exports
          .getOne('actions', action)
          .then(newAction => {
            if (newAction) {
              //action exists, return just its id
              console.log({ newAction: newAction });
              expandedActions.push(newAction);
              if (i === idArr.length - 1) resolve(expandedActions);
            } else {
              //action doesn't exist and is an id, dont add to project
              console.log({ actionNotFound: action });
              if (i === actionsArr.length - 1) resolve(expandedActions);
            }
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      } // end for loop
    });
  }
};
