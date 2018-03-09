exports.up = function(knex, Promise) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextsTable)
    .catch(error => console.log(error));
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('contexts')
    .then(_ => {
      return knex.schema.dropTableIfExists('actions');
    })
    .then(_ => {
      return knex.schema.dropTableIfExists('projects');
    })
    .catch(error => console.log(error));
};

const createProjectsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projects', project => {
        project.increments();
        project.string('name', 24).notNullable();
        project.string('description', 128);
        project.boolean('completed').defaultTo(false);

        resolve(knex);
      })
      .catch(reason => reject(reason));
  });
};

const createActionsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actions', action => {
        action.increments();
        action.string('description', 24).notNullable();
        action.string('notes', 128);
        action.boolean('completed').defaultTo(false);

        resolve(knex);
      })
      .catch(reason => reject(reason));
  });
};

const createContextsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('contexts', context => {
        context.increments();
        context.string('context').notNullable();

        resolve(knex);
      })
      .catch(reason => reject(reason));
  });
};
