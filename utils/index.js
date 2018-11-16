const binaryToBoolean = array =>
  array.map(item => ({
    ...item,
    completed: item.completed ? true : false
  }));
const projectBuilder = (project, actions) => ({
  id: project.id,
  name: project.name,
  description: project.description,
  completed: project.completed ? true : false,
  actions: binaryToBoolean(actions)
});

module.exports = {
  binaryToBoolean,
  projectBuilder
};
