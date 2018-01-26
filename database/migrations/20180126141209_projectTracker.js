
exports.up = function (knex) {
  return createProjectsTable(knex)
    .then(createActionsTable)
    .then(createContextsTable)
    .then(createProjectsContextsTable)
    .then(createActionsContextsTable)
    .catch(err => {
      console.log(err);
      reject(err);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('actionscontexts')
    .then(() => {
      return knex.schema.dropTableIfExists('projectscontexts')
    })
    .then(() => {
      return knex.schema.dropTableIfExists('contexts')
    })
    .then(() => {
      return knex.schema.dropTableIfExists('actions')
    })
    .then(() => {
      return knex.schema.dropTableIfExists('projects')
    })
    .catch(err => console.log(err));
};

const createProjectsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projects', (t) => {
        t.increments();
        t.string('name').notNullable();
        t.text('description').notNullable();
        t.boolean('completed').notNullable();
        t.timestamp('created_at').defaultTo(knex.fn.now());
        resolve(knex);
      })
      .catch(err => reject(err));
  });
};

const createActionsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actions', (t) => {
        t.increments();
        t.text('description').notNullable();
        t.text('notes');
        t.boolean('completed').notNullable();
        t.integer('projectId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        resolve(knex);
      })
      .catch(err => reject(err));
  });
};

const createContextsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('contexts', (t) => {
        t.increments();
        t.enum('context', ['home', 'office', 'at computer']).notNullable();
        t.timestamp('created_at').defaultTo(knex.fn.now());
        resolve(knex);
      })
      .catch(err => reject(err));
  });
};

const createProjectsContextsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('projectscontexts', (t) => {
        t.increments();
        t.integer('projectId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects');
        t.integer('contextId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('contexts');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        resolve(knex);
      })
      .catch(err => reject(err));
  });
};

const createActionsContextsTable = knex => {
  return new Promise((resolve, reject) => {
    knex.schema
      .createTable('actionscontexts', (t) => {
        t.increments();
        t.integer('actionId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('actions');
        t.integer('contextId')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('contexts');
        t.timestamp('created_at').defaultTo(knex.fn.now());
        resolve(knex);
      })
      .catch(err => reject(err));
  });
};
