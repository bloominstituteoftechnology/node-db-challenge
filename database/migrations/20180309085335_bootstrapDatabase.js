exports.up = function(knex, Promise) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextsTable)
    .then(createProjectActionsTable)
    .then(createProjectContextsTable)
    .then(createActionContextsTable)
    .catch(error => console.log(error));
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('actioncontexts')
    .then(_ => {
      return knex.schema.dropTableIfExists('projectcontexts');
    })
    .then(_ => {
      return knex.schema.dropTableIfExists('projectactions');
    })
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

const createProjectActionsTable = knex => {
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

        resolve(knex);
      })
      .catch(reason => reject(reason));
  });
};

const createProjectContextsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projectcontexts', projectcontext => {
        projectcontext.increments();
        projectcontext
          .integer('projectId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
        projectcontext
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

const createActionContextsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actioncontexts', actioncontext => {
        actioncontext.increments();
        actioncontext
          .integer('actionId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('actions');
        actioncontext
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
