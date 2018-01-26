const routes = {
  projects: require('./routes/projects.route.js'),
  actions: require('./routes/actions.route.js'),
  contexts: require('./routes/contexts.route.js'),
};

module.exports = (server) => {

  // Projects Routes
  routes.projects(server);

  // Actions Routes
  routes.actions(server);

  // Contexts Routes
  routes.contexts(server);

  // Custom Routes goes below

};