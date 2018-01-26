const express = require('express');
const bodyParser = require('body-parser');
const cfg = require('./knexfile');
const knex = require('knex')(cfg);
const CrudRouteGenerator = require('./CrudRouteGenerator');
const app = express();
app.use(bodyParser.json());


// Generate generic routes
['projects', 'actions', 'contexts', 'projectContexts'].forEach((tableName) => {
  const generator = new CrudRouteGenerator(tableName);
  app.use('/' + tableName, generator.exportRoutes());
});

// Last endpoint
function setCompletedToBool(object) {
  if (typeof object.completed !== 'undefined') object.completed = Boolean(object.completed);
}
app.get('/full-project/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const project = await knex('projects').where({ id }).first();
    const actions = await knex('actions').where({ projectId: id });
    const contextIds = (await knex('projectContexts')
                      .where({projectId: id})
                      .select('contextId'))
                      .map((c) => c.contextId);
    const contexts = await knex('contexts').whereIn('id', contextIds);
    setCompletedToBool(project);
    actions.forEach(setCompletedToBool);
    contexts.forEach(setCompletedToBool);

    project.actions = actions;
    project.contexts = contexts;
    res.status(200).json({project});
  } catch(err) {
    console.log(err);
  }
});
app.listen(3000, () => console.log('Server on port 3000'));
