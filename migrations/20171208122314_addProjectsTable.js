
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
    tbl.increments('id').primary();
    tbl.string('name', 255).notNullable().unique('name');
    tbl.text('description').notNullable();
    tbl.boolean('completed').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists('projects');
};
