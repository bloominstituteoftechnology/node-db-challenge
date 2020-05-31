module.exports = {
  intToBoolean,
  booleanToint,
  projectToBody,
  taskToBody,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToint(bool) {
  return bool === true ? 1 : 0;
}

function projectToBody(project) {
  const result = {
    ...project,
    completed: intToBoolean(project.completed),
  };

  if (project.task) {
    result.task = project.task.map(task => ({
      ...task,
      completed: intToBoolean(task.completed),
    }));
  }

  return result;
}

function taskToBody(task) {
  return {
    ...task,
    completed: intToBoolean(task.completed),
  };
}
