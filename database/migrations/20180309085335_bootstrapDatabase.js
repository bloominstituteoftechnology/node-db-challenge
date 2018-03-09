exports.up = function(knex, Promise) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .catch(err => console.log(err));
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('actions')
    .then(_ => {
      return knex.schema.dropTableIfExists('projects');
    })
    .catch(err => console.log(err));
};

const createProjectsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projects', project => {
        project.increments();
        project.string('name', 64);
        project.string('description', 128);
        project.boolean('completed');

        resolve(knex);
      })
      .catch(err => reject(err));
  });
};

const createActionsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actions', action => {
        action.increments();
        action.string('description', 64);
        action.string('notes', 128);
        action.boolean('completed');

        resolve(knex);
      })
      .catch(err => reject(err));
  });
};
