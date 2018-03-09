exports.up = function(knex, Promise) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextsTable)
    .then(createProjectActionsContextsTable)
    .catch(error => console.log(error));
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('projectactioncontexts')
    .then(_ => {
      knex.schema.dropTableIfExists('contexts');
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
        project.string('name').notNullable();
        project.string('description');
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
        action
          .integer('projectId')
          .unsigned()
          .references('id')
          .inTable('projects');
        action.string('description').notNullable();
        action.string('notes');
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

        resolve(knex);
      })
      .catch(reason => reject(reason));
  });
};

const createProjectActionsContextsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projectactioncontexts', projectactioncontext => {
        projectactioncontext.increments();
        projectactioncontext
          .integer('projectId')
          .unsigned()
          .references('id')
          .inTable('projects');
        projectactioncontext
          .integer('actionId')
          .unsigned()
          .references('id')
          .inTable('actions');
        projectactioncontext
          .integer('contextId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('contexts');

        resolve(knex);
      })
      .catch(reason => reject(reason));
  });
};
