// An `action` belongs to only one project. An action has:
//   - a unique id.
//   - a description of what needs to be done.
//   - a notes column to add additional information.
//   - a flag that indicates if the action has been completed.
exports.up = function(knex, Promise) {
  return knex.schema.createTable('action', function(tbl){
    tbl.increments();
    tbl.text('description').notNullable()
    tbl.text('notes').notNullable()
    tbl.boolean('completed').defaultTo(false);
    tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('project')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('action')
};
