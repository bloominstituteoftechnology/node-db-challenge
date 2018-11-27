// An action belongs to only one project. An action has:
// - a unique id.
// - a description of what needs to be done.
// - a notes column to add additional information.
// - a flag that indicates if the action has been completed.

exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.text('notes').notNullable();
      tbl.boolean('completed').defaultTo(false);
      tbl.integer('project').unsigned().notNullable();
      tbl.foreign('project').references('id').inTable('projects');
  })
};

exports.down = function(knex, Promise) {
  // remove table on rollback
  return knex.schema.dropTable('actions');
};
