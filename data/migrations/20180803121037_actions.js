
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
    tbl.increments();
    tbl.text('description').notNullable();
    tbl.text('notes');
    tbl.boolean('complete').defaultTo(false);
    tbl
      .integer('projects_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects');
    tbl.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
