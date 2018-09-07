module.exports = {
  intToBool: function(int) {
    return int === 1 ? true : false;
  },

  projectMapper: function(project) {
    const result = {
      ...project,
      completed: this.intToBool(project.completed),
    };

    if (project.actions) {
      result.actions = project.actions.map(action => ({
        ...action,
        completed: this.intToBool(action.completed),
      }));
    }

    return result;
  },
};
