module.exports = {

  intToBoolean: (int) => {
    return int === 1 ? true : false;
  },

  projectBool: (project) => {
    const result = {
      ...project,
      completed: module.exports.intToBoolean(project.completed),
    };

    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
        completed: module.exports.intToBoolean(action.completed),
      }));
    }

    return result;
  },

  actionBool: (action) => {
    return {
      ...action,
      completed: module.exports.intToBoolean(action.completed),
    };
  }
};
