module.exports = {
  toBool,
  toInt,
  projectComplete,
  actionComplete
};

function toBool(int) {
  return int === 1 ? true : false;
}

function toInt(bool) {
  return bool === true ? 1 : 0;
}

function projectComplete(project) {
  const result = {
    ...project,
    completed: toBool(project.completed)
  };

  if (project.actions) {
    result.actions = project.actions.map(action => ({
      ...action,
      completed: toBool(action.completed)
    }));
  }

  return result;
}

function actionComplete(action) {
  return {
    ...action,
    completed: toBool(action.completed)
  };
}
