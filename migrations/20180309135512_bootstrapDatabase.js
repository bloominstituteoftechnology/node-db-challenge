
exports.up = function(knex) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextTable)
    .then(createActionContextTable)
    .catch(error => {
      console.log(error);
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('actioncontext')
    .then(function() {
      return knex.schema.dropTableIfExists('contexts');
    })
    .then(function() {
      return knex.schema.dropTableIfExists('actions');
    })
    .then(function() {
      return knex.schema.dropTableIfExists('projects');
    })
    .catch(error => console.log(error));
};

function createProjectsTable(knex) {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projects', (projects) => {
        projects.increments('proj_id');
        projects.string('proj_name', 30).notNullable().unique();
        projects.text('description').notNullable();
        projects.boolean('completed').notNullable();

        resolve(knex);
      })
      .catch(error => reject(error));
  });
}

function createActionsTable(knex) {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actions', (actions) => {
        actions.increments('action_id');
        actions.string('description').notNullable();
        actions.text('notes').notNullable();
        actions.boolean('completed').notNullable();

        actions.integer('project').unsigned().notNullable();
        actions.foreign('project').references('proj_id').inTable('project');

        resolve(knex);
      })
      .catch(error => reject(error));
  });
}

function createContextTable(knex) {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('contexts', (contexts) => {
        contexts.increments('context_id');
        contexts.string('context').notNullable().unique();

        resolve(knex);
      })
      .catch(error => reject(error));
  });
}

function createActionContextTable(knex) {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actioncontext', (actioncontext) => {
        actioncontext.increments();
        actioncontext
          .integer('action')
          .unsigned()
          .notNullable()
          .references('action_id')
          .inTable('actions');
        actioncontext
          .integer('context')
          .unsigned()
          .notNullable()
          .references('context_id')
          .inTable('contexts');
        resolve(knex);
      })
      .catch(error => console.log(error));
  });
};




