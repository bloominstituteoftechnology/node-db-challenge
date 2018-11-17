
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl) {
    // primary key
    tbl.increments('id');

    // foreign key
    tbl
      .integer('project_id')
      .references('id')
      .inTable('projects')

    // otherfields
    tbl
      .string('description', 256)
      .notNullable();
    tbl.string('notes', 256);
    tbl.boolean('completed').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
