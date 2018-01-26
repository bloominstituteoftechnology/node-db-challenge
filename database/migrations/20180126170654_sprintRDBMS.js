

exports.up = function(knex) {
  return createProjectsTable(knex)
    .then(createProjectsTable)
    .then(createActionsTable)
    .then(createContextsTable)
    .catch(err => reject(error))
};

exports.down = function(knex) {
  return knex.schema
    dropTableIfExists('contexts')
    .then(() => {
      console.log('dropping actions')
      return knex.schema.dropTableIfExists('actions')
    })
    .then(() => {
      console.log('dropping projects')
      return knex.schema.dropTableIfExists('projects')
    })
    .catch(error => console.log(error))
};

const projectsTable = (knex) => {
  console.log('Creating Projects Table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projects', (projects) => {
        projects.increments();
        projects.string('name', 128).notNullable();
        projects.text('text');
        projects.boolean('completed').defaultTo('false');
        
        console.log('projects table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

const actionsTable = (knex) => {
  console.log('Creating Actions Table');

  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actions', (actions) => {
        actions.increments();
        actions.text('description').notNullable();
        actions.text('notes');
        actions.boolean('completed').defaultTo('false');
        actions
          .integer('projectsID')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');

        console.log('actions table created');
        resolve(knex);
      })
      .catch(error => reject(error));
  });
};

const contextsTable = (knex) => {
  console.log('Creating Contexts Table');

  return new Promise((resolve, reject) => {
    kenx.schema
      .createTable('contexts', (contexts) => {
        contexts.increments();
        contexts.text('context');
      });
  });
};
