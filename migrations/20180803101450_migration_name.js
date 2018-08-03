
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', (tbl) => {
      tbl.increments('id').primary();
      tbl.string('name').notNullable();
      tbl.string('description').defaultTo('');
      tbl.boolean('completed').defaultTo(false);
    }),
    knex.schema.createTable('actions', (tbl) => {
      tbl.increments('id').primary();
      tbl.string('description').defaultTo('');
      tbl.string('notes').defaultTo('');
      tbl.boolean('completed').defaultTo(false);
    }),
    knex.schema.createTable('projects_actions', (tbl) => {
      tbl.increments('id').primary();
      tbl.int('projectId').references('id').inTable('projects');
      tbl.int('actionsId').references('id').inTable('actions');
    })   
  ]);
};

exports.down = function(knex, Promise) {
  
};
