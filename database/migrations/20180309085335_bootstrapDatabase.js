exports.up = function(knex, Promise) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextsTable)
    .then(createProjectActionsTable)
    .catch(error => console.log(error));
};

exports.down = function(knex, Promise) {
  console.log('drop');
  return knex.schema
    .dropTableIfExists('projectactions')
    .then(_ => {
      return knex.schema.dropTableIfExists('contexts');
    })
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
        context
          .string('context')
          .notNullable()
          .unique();

        console.log('finished context table');
        resolve(knex);
      })
      .catch(reason => reject(reason));
  });
};

const createProjectActionsTable = knex => {
  console.log('projectactions');
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projectactions', projectaction => {
        projectaction.increments();
        projectaction
          .integer('projectId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
        projectaction
          .integer('actionId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('actions');

        resolve();
      })
      .catch(reason => reject(reason));
  });
};
