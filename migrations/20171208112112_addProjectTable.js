
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl) {
    tbl.integer('id').notNullable();
    tbl.string('name').notNullable();
    tbl.string('description').notNullable();
    tbl.boolean('completed').notNullable().defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('projects');
};
